import { Controller, Get, Param, Post, Body, Put, ConflictException } from '@nestjs/common';
import { UsersService } from '../provider/users.service';
import { User as UserDto } from '../users.entity';
import { CreateUserDto } from '../dto/create.user.dto'
import { UpdateUserDto } from '../dto/update.user.dto'

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
  private async create(@Body() user: CreateUserDto): Promise<{}>{
    try {
      await this.userService.create(user)
      return {}
    }catch(err){
      throw new ConflictException()
    }
  }

  @Get()
  @ApiBearerAuth()
  private async getAll(): Promise<UserDto[]>{
    return this.userService.findAll()
  }

  @Get(':id')
  @ApiBearerAuth()
  private async getById(@Param('id') id: number): Promise<UserDto>{
    return this.userService.findById(id)
  }

  @Put(':id')
  @ApiBearerAuth()
  private async update(@Param('id') id: number, @Body() user: UpdateUserDto): Promise<{}>{
    return this.userService.update(id, user)
  }
}
