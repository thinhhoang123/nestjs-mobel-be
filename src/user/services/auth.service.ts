import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersRepository } from '../repositories/users.repository';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string): Promise<any> {
    const getUser = await this.usersRepository.findByCondition({
      username: username,
    });
    if (!getUser) {
      throw new UnauthorizedException();
    }
    return getUser;
  }

  async login(user: any) {
    const payload = {
      username: user.userName,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    };
    return {
      ...payload,
      access_token: this.jwtService.sign(payload),
    };
  }
}
