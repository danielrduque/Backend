import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from 'src/shared/entities/customer.entity'; // Asegúrate de que este sea el path correcto
import * as bcrypt from 'bcrypt';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}

  // Crear un nuevo cliente
  async createCustomer(
    username: string,
    email: string,
    phone: string,
    password: string,
  ) {
    // Verifica si el email ya existe
    const existingCustomer = await this.customerRepository.findOne({
      where: { email },
    });
    if (existingCustomer) {
      throw new BadRequestException('El email ya está registrado.');
    }

    // Encriptar la contraseña antes de guardar
    const hashedPassword = await bcrypt.hash(password, 10);

    const customer = this.customerRepository.create({
      username,
      email,
      phone,
      password: hashedPassword,
    });

    // Guardar cliente en la base de datos
    return await this.customerRepository.save(customer);
  }
}
