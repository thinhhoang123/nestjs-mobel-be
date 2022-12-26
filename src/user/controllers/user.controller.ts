import { Controller, Post, UseGuards, Req, Get } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { LoginDto } from '../dto/login.dto';
import { AuthService } from '../services/auth.service';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'Login user' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiBody({ type: LoginDto })
  @UseGuards(AuthGuard('local'))
  async login(@Req() req) {
    return await this.authService.login(req.user);
  }

  @Get('GetAllUser')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all user' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @UseGuards(AuthGuard('jwt'))
  async getAllUser(@Req() req) {
    console.log(req.user);
  }
}
