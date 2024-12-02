import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { config } from './config';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';
import { JwtStrategy } from './user/jwt/jwt.strategy'; // Importamos la estrategia

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      isGlobal: true,
    }),
    // Modulo para autenticación usando JWT
    PassportModule,
    JwtModule.register({
      secret: 'my-secret-key', // Asegúrate de reemplazar esto por una clave más segura
      signOptions: { expiresIn: '1h' }, // Configura la expiración del token
    }),
    SharedModule.forRoot(),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService, JwtStrategy], // Registramos la estrategia JWT
})
export class AppModule {}
