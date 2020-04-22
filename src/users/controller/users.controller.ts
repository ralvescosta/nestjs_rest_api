import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { UsersService } from '../provider/users.service';
import { UserDto } from '../dto/user.dto'
import { CreateUserDto } from '../dto/create.user.dto'
import { UpdateUserDto } from '../dto/update.user.dto'

import { ApiCreatedResponse,ApiBadRequestResponse, ApiConflictResponse, ApiBearerAuth, ApiBody } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService){}

  @Post()
  @ApiBody({type: CreateUserDto})
  @ApiCreatedResponse({description: 'The record has been successfully created.'})
  @ApiBadRequestResponse({description: 'DTO Validate Error'})
  @ApiConflictResponse({description: 'Record Arad Exist'})
  async create(@Body() user: CreateUserDto): Promise<{}>{
    return this.userService.create(user)
  }

  @Get()
  @ApiBearerAuth()
  async getAll(): Promise<UserDto[]>{
    return this.userService.getAll()
  }

  @Get(':id')
  @ApiBearerAuth()
  async getById(@Param('id') id: number): Promise<UserDto>{
    return this.userService.getById(id)
  }

  @Put(':id')
  @ApiBearerAuth()
  async update(@Param('id') id: number, @Body() user: UpdateUserDto): Promise<{}>{
    return this.userService.update(id, user)
  }
}
