import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Extrae el token desde el encabezado Authorization
      ignoreExpiration: false, // No ignorar la expiración del token
      secretOrKey: 'my-secret-key', // Debe coincidir con la clave secreta definida en JwtModule
    });
  }

  async validate(payload: any) {
    // Validar el payload del token (puedes personalizar esta parte)
    return { userId: payload.sub, username: payload.username };
  }
}
