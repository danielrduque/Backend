import { Controller, Get, Post, Body } from '@nestjs/common';
import { ReservaService } from 'src/user/services/reserva.service';
import { Reserva } from 'src/shared/entities/reserva.entity';
import { CreateReservaDto } from '../dtos/reserva.dto';

@Controller('reservas')
export class ReservaController {
  constructor(private readonly reservaService: ReservaService) {}

  // Método POST para crear una reserva
  @Post('')
  async crearReserva(@Body() reservaData: CreateReservaDto): Promise<Reserva> {
    return this.reservaService.crearReserva(reservaData);
  }

  // Método GET para obtener todas las reservas
  @Get('')
  async obtenerReservas(): Promise<Reserva[]> {
    return this.reservaService.obtenerReservas(); // Este método se debe definir en el servicio
  }
}
