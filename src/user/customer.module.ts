import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerService } from './services/customer.service';
import { CustomerController } from './controllers/customer.controller';
import { CustomerRepository } from 'src/shared/repositories/customer.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CustomerRepository])],
  providers: [CustomerService],
  controllers: [CustomerController],
})
export class CustomerModule {}
