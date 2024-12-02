import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserRepository } from 'src/shared/repositories/user.repository';
import { CreateUserDto, LoginDto } from '../dtos/user.dto';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService, // Inyectamos JwtService
  ) {}

  async createUser(body: CreateUserDto): Promise<void> {
    // Hashea la contraseña antes de guardarla
    const hashedPassword = await bcrypt.hash(body.password, 10);
    await this.userRepository.insert({ ...body, password: hashedPassword });
  }

  async validateUser(loginDto: LoginDto): Promise<any> {
    // Busca al usuario por su correo electrónico
    const user = await this.userRepository.findOne({
      where: { email: loginDto.email },
    });

    // Verifica si el usuario existe y si la contraseña es correcta
    if (user && (await bcrypt.compare(loginDto.password, user.password))) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user; // Omite la contraseña en el resultado
      return result; // Devuelve el usuario sin la contraseña
    }

    // Lanza una excepción si las credenciales son inválidas
    throw new UnauthorizedException('Credenciales inválidas');
  }

  async login(user: any) {
    // Genera un payload para el token JWT
    const payload = { email: user.email, sub: user.id }; // Cambiado 'username' a 'email'

    // Devuelve el token de acceso
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
