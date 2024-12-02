import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { SharedModule } from 'src/shared/shared.module';
import { UserController } from './controllers/user.controller';
import { JwtModule } from '@nestjs/jwt'; // Importa JwtModule
import { UserRepository } from 'src/shared/repositories/user.repository';
import { UserService } from './services/user.service'; // Asegúrate de importar UserService
import { ReservaController } from './controllers/reserva.controller';
import { ReservaService } from './services/reserva.service';
import { ReservaRepository } from 'src/shared/repositories/reserva.repository';

@Module({
  imports: [
    SharedModule.forRoot(),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'your_secret_key', // Cambia esto por tu clave secreta
      signOptions: { expiresIn: '60s' }, // Ajusta según sea necesario
    }),
  ],
  controllers: [UserController, ReservaController],
  providers: [UserService, UserRepository, ReservaService, ReservaRepository], // Agrega UserService aquí
  exports: [UserRepository], // Si necesitas usar el UserRepository en otro módulo
})
export class UserModule {}
