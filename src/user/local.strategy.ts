import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import * as bcrypt from 'bcrypt';
import { saltOrRounds } from 'src/constants/bcryptConstants';
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const validateUser = await this.authService.validateUser(
      username,
      password,
    );
    if (!validateUser) {
      throw new UnauthorizedException();
    }
    return validateUser;
  }
}
