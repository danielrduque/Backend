import { Injectable } from '@nestjs/common';
import { Reserva } from 'src/shared/entities/reserva.entity';
import { ReservaRepository } from 'src/shared/repositories/reserva.repository';

@Injectable()
export class ReservaService {
  constructor(private reservaRepository: ReservaRepository) {}

  // Método para crear una reserva
  async crearReserva(reservaData: Partial<Reserva>): Promise<Reserva> {
    const nuevaReserva = this.reservaRepository.create(reservaData);
    return this.reservaRepository.save(nuevaReserva);
  }

  // Método para obtener todas las reservas
  async obtenerReservas(): Promise<Reserva[]> {
    return this.reservaRepository.find(); // Recupera todas las reservas
  }
}
