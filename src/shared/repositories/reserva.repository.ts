import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Reserva } from '../entities/reserva.entity';

@Injectable()
export class ReservaRepository extends Repository<Reserva> {
  constructor(dataSource: DataSource) {
    super(Reserva, dataSource.createEntityManager());
  }
}
