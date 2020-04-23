import { Controller,Post, Body, Res } from '@nestjs/common';
import { SessionsService } from '../provider/sessions.service';
import { CreateSessionDto } from '../dto/create.session.dto'
import { SessionDto } from '../dto/session.dto'
import { Response } from 'express';


import {
  ApiResponse,
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiTags,
  ApiUnauthorizedResponse,
  ApiInternalServerErrorResponse
} from '@nestjs/swagger';

@ApiTags('Session')
@ApiBearerAuth()
@Controller('session')
export class SessionsController {
  constructor(private userService: SessionsService){}

  @Post()
  @ApiResponse({status:200, description: 'Session has been successfully created.'})
  @ApiBadRequestResponse({description: 'DTO Validate Error'})
  @ApiUnauthorizedResponse({description: 'User is Unauthorized'})
  @ApiInternalServerErrorResponse({description: 'Internal Server Error'})
  private async create(@Body() session: CreateSessionDto, @Res() response: Response): Promise<SessionDto | any>{
    const resp = await this.userService.create(session)

    if(resp){
      return response.status(200).json(resp)
    }
    return response.status(403).json({error: 403, msg: 'Unauthorized'})
  }
}
