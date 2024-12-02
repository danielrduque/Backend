import {
  Controller,
  Post,
  Body,
  HttpStatus,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from '../services/user.service';
import { CreateUserDto, LoginDto } from '../dtos/user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('')
  async createUser(
    @Body() body: CreateUserDto,
  ): Promise<{ message: string; status: number }> {
    await this.userService.createUser(body);
    return {
      message: 'Usuario creado exitosamente',
      status: HttpStatus.OK,
    };
  }

  @Post('login')
  async login(
    @Body() body: LoginDto,
  ): Promise<{ access_token: string } | UnauthorizedException> {
    const user = await this.userService.validateUser(body);
    if (user) {
      return this.userService.login(user); // Devuelve el token JWT al cliente
    }
    throw new UnauthorizedException('Credenciales inválidas');
  }
}
