import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersRepository } from '../repositories/users.repository';
import * as bcrypt from 'bcrypt';
import { UsersDocument } from '../schemas/users.schemas';
@Injectable()
export class AuthService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(
    username: string,
    password: string,
  ): Promise<UsersDocument> {
    const getUser = await this.usersRepository.findByCondition({
      username: username,
    });

    if (!getUser) {
      throw new UnauthorizedException();
    }

    const isMatch = await bcrypt.compare(password, getUser.password);
    if (!isMatch) {
      throw new BadRequestException('Something bad happened', {
        cause: new Error(),
        description: 'Wrong password',
      });
    }

    return getUser;
  }

  async login(user: any) {
    const payload = {
      username: user.username,
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
