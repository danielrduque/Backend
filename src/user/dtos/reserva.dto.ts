// create-reserva.dto.ts
import { IsNotEmpty, IsString, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateReservaDto {
  @ApiProperty({
    required: true,
    type: String,
    example: 'Juan Pérez',
  })
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @ApiProperty({
    required: true,
    type: String,
    example: '2024-12-01',
  })
  @IsNotEmpty()
  @IsDateString()
  fecha: Date;

  @ApiProperty({
    required: true,
    type: String,
    example: '14:00',
  })
  @IsNotEmpty()
  @IsString()
  hora: string;
}
