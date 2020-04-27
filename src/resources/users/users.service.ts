/* eslint-disable @typescript-eslint/camelcase */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create.user.dto'
import { UpdateUserDto } from './dto/update.user.dto'
import { Repository } from 'typeorm';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ){}

  public async create(user: CreateUserDto): Promise<User>{
    console.log(user)
    const newUser = this.usersRepository.create(user)
    return this.usersRepository.save(newUser)
  }

  public async findAll(): Promise<User[]>{
    return this.usersRepository.find();
  }

  public async findById(id: number): Promise<User>{
    return this.usersRepository.findOne(id)
  }

  public async findByEmail(email: any): Promise<User>{
    return this.usersRepository.findOne({where: {email}})
  }

  public async update(id: number, user:UpdateUserDto): Promise<{}>{
    console.log(id, user)
    return {}
  }

}
