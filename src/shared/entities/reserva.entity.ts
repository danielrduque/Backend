import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('reservas')
export class Reserva {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50, nullable: false })
  nombre: string;

  @Column({ type: 'date', nullable: false })
  fecha: Date;

  @Column({ type: 'varchar', length: 20, nullable: false })
  hora: string;
}
