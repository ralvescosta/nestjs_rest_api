import { Controller, Get, Param, Post, Body, Put, Res } from '@nestjs/common';
import { UsersService } from '../provider/users.service';
import { User as UserDto } from '../users.entity';
import { CreateUserDto } from '../dto/create.user.dto'
import { UpdateUserDto } from '../dto/update.user.dto'
import {Response} from 'express'

import { ApiCreatedResponse,ApiBadRequestResponse, ApiConflictResponse, ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('user')
export class UsersController {
  constructor(private userService: UsersService){}

  @Post()
  @ApiBody({type: CreateUserDto})
  @ApiCreatedResponse({description: 'The record has been successfully created.'})
  @ApiBadRequestResponse({description: 'DTO Validate Error'})
  @ApiConflictResponse({description: 'User Arad Exist'})
  async create(@Body() user: CreateUserDto, @Res() response: Response): Promise<{}>{
    try {
      await this.userService.create(user)
      return response.status(409).json({})
    }catch(err){
      return response.status(409).json({error: 409, msg: 'User Arad Exist'})
    }
  }

  @Get()
  @ApiBearerAuth()
  async getAll(): Promise<UserDto[]>{
    return this.userService.findAll()
  }

  @Get(':id')
  @ApiBearerAuth()
  async getById(@Param('id') id: number): Promise<UserDto>{
    return this.userService.findOne(id)
  }

  @Put(':id')
  @ApiBearerAuth()
  async update(@Param('id') id: number, @Body() user: UpdateUserDto): Promise<{}>{
    return this.userService.update(id, user)
  }
}
