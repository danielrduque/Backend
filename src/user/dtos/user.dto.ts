import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'Nombre completo del usuario',
    example: 'Pérez',
  })
  @IsString()
  @IsNotEmpty()
  readonly username: string;

  @ApiProperty({
    description: 'Correo electrónico del usuario',
    example: 'juan.perezzz10@example.com',
  })
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty({
    description: 'telefono del usuario',
    example: '3204160395',
  })
  @IsString()
  @IsNotEmpty()
  readonly phone: string;

  @ApiProperty({
    description: 'Contraseña del usuario, debe tener al menos 6 caracteres',
    example: '123456',
  })
  @IsString()
  @MinLength(6)
  @IsNotEmpty()
  readonly password: string;

  @ApiProperty({
    description: 'Rol del usuario, por ejemplo, "user" o "admin"',
    example: 'user',
    required: false,
  })
  @IsString()
  @IsOptional()
  readonly role?: string; // Por ejemplo, puede ser 'user', 'admin', etc.
}

export class LoginDto {
  @ApiProperty({
    description: 'Correo electrónico del usuario',
    example: 'juan.perezzz10@example.com',
  })
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty({
    description: 'Contraseña del usuario',
    example: '123456',
  })
  @IsString()
  @MinLength(6)
  @IsNotEmpty()
  readonly password: string;
}
