/* eslint-disable @typescript-eslint/camelcase */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateUserDto } from '../dto/create.user.dto'
import { UpdateUserDto } from '../dto/update.user.dto'
import { Repository } from 'typeorm';
import { User } from '../users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ){}

  public create(user: CreateUserDto): Promise<{}>{
    return this.usersRepository.save({...user, password_hash: '123456'})
  }

  public findAll(): Promise<User[]>{
    return this.usersRepository.find();
  }

  public findOne(id: number): Promise<User>{
    return this.usersRepository.findOne(id)
  }

  public update(id: number, user:UpdateUserDto): {}{
    console.log(id, user)
    return {}
  }

}
