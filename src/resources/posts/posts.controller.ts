import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post as PostDto } from './posts.entity';
import { CreatePostDto } from './dto/create.post.dto'
import { UpdatePostDto } from './dto/update.post.dto'

import { ApiCreatedResponse,ApiBadRequestResponse, ApiConflictResponse, ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('Posts')
@Controller('post')
export class PostsController {
  constructor(private userService: PostsService){}

  @Post()
  @ApiBearerAuth()
  @ApiBody({type: CreatePostDto})
  @ApiCreatedResponse({description: 'The record has been successfully created.'})
  @ApiBadRequestResponse({description: 'DTO Validate Error'})
  @ApiConflictResponse({description: 'Record Arad Exist'})
  private async create(@Body() user: CreatePostDto): Promise<{}>{
    return this.userService.create(user)
  }

  @Get()
  @ApiBearerAuth()
  private async getAll(): Promise<PostDto[]>{
    return this.userService.findAll()
  }

  @Get(':id')
  @ApiBearerAuth()
  private async getById(@Param('id') id: number): Promise<PostDto>{
    return this.userService.findOne(id)
  }

  @Put(':id')
  @ApiBearerAuth()
  private async update(@Param('id') id: number, @Body() user: UpdatePostDto): Promise<{}>{
    return this.userService.update(id, user)
  }
}
