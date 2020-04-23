/* eslint-disable @typescript-eslint/camelcase */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CreatePostDto } from '../dto/create.post.dto'
import { UpdatePostDto } from '../dto/update.post.dto'
import { Repository } from 'typeorm';
import { Post } from '../posts.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private usersRepository: Repository<Post>,
  ){}

  public create(post: CreatePostDto): Promise<{}>{
    return this.usersRepository.save(post)
  }

  public findAll(): Promise<Post[]>{
    return this.usersRepository.find();
  }

  public findOne(id: number): Promise<Post>{
    return this.usersRepository.findOne(id)
  }

  public update(id: number, user:UpdatePostDto): {}{
    console.log(id, user)
    return {}
  }

}
