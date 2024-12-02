import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { CustomerService } from '../services/customer.service';

@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post('register')
  async register(
    @Body('username') username: string,
    @Body('email') email: string,
    @Body('phone') phone: string,
    @Body('password') password: string,
  ) {
    if (!username || !email || !phone || !password) {
      throw new BadRequestException('Todos los campos son obligatorios');
    }

    try {
      const newCustomer = await this.customerService.createCustomer(
        username,
        email,
        phone,
        password,
      );
      return { message: 'Cliente registrado con éxito', customer: newCustomer };
    } catch (error) {
      throw new BadRequestException(
        'Error al registrar cliente: ' + error.message,
      );
    }
  }
}
