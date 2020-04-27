import { Controller, Get, Param, Post, Body, Put, ConflictException, UseGuards, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { User as UserDto } from './users.entity';
import { CreateUserDto } from './dto/create.user.dto'
import { UpdateUserDto } from './dto/update.user.dto'
import { JwtAuthGuard } from '../auth/jwt.strategy/jwt-auth.guard'
import { RolesGuard } from '../auth/acl.strategy/roles.guard'
import { Roles } from '../auth/decorators/roles.decorator'

import {
  ApiCreatedResponse,
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiBearerAuth,
  ApiBody,
  ApiTags,
  ApiForbiddenResponse,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

@ApiTags('Users')
@Controller('user')
export class UsersController {
  constructor(private userService: UsersService){}

  @Post()
  /** SWEGGER */
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
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('Admin')
  /** SWEGGER */
  @ApiBearerAuth()
  @ApiUnauthorizedResponse({description: 'If Token not provider or token is invalid'})
  @ApiForbiddenResponse({description: 'If user role not be Admin' })
  private async getAll(@Request() req: any): Promise<UserDto[]>{
    return this.userService.findAll()
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('User')
  /** SWEGGER */
  @ApiBearerAuth()
  @ApiUnauthorizedResponse({description: 'If Token not provider or token is invalid'})
  @ApiForbiddenResponse({description: 'If user role not be User' })
  private async getById(@Param('id') id: number): Promise<UserDto>{
    return this.userService.findById(id)
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('Admin')
  /** SWEGGER */
  @ApiBearerAuth()
  @ApiUnauthorizedResponse({description: 'If Token not provider or token is invalid'})
  @ApiForbiddenResponse({description: 'If user role not be Amin' })
  private async update(@Param('id') id: number, @Body() user: UpdateUserDto): Promise<{}>{
    return this.userService.update(id, user)
  }
}
