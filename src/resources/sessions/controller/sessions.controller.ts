import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from '../../auth/local.strategy/local-auth.guard'
import { AuthService } from '../../auth/auth.service'

import {
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Session')
@Controller('session')
export class SessionsController {
  constructor(private authService: AuthService){}

  @Post()
  @UseGuards(LocalAuthGuard)
  async create(@Request() req: any): Promise<any>{
    return this.authService.generateAccessToken(req.user);
  }
}
