import { Repository } from 'typeorm';
import { Customer } from '../entities/customer.entity';

export class CustomerRepository extends Repository<Customer> {
  // Puedes definir tus métodos personalizados aquí si lo necesitas
}
