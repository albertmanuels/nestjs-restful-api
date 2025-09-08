import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import {
  LoginUserRequest,
  RegisterUserRequest,
  UserResponse,
} from '../model/user.model';
import { WebResponse } from '../model/web.model';
import { UserService } from './user.service';
import type { User } from '../../generated/prisma';
import { Auth } from '../common/auth.decorator';

@Controller('/api/users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/register')
  @HttpCode(200)
  async register(
    @Body() request: RegisterUserRequest,
  ): Promise<WebResponse<UserResponse>> {
    const result = await this.userService.register(request);

    return {
      data: result,
    };
  }

  @Post('/login')
  @HttpCode(200)
  async login(
    @Body() request: LoginUserRequest,
  ): Promise<WebResponse<Required<UserResponse>>> {
    const result = await this.userService.login(request);

    return {
      data: result,
    };
  }

  @Get('/current')
  @HttpCode(200)
  async get(@Auth() user: User): Promise<WebResponse<UserResponse>> {
    const result = await this.userService.get(user);

    return {
      data: result,
    };
  }
}
