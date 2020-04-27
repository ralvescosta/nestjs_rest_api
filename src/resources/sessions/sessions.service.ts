/* eslint-disable @typescript-eslint/camelcase */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateSessionDto } from './dto/create.session.dto'
import { SessionDto } from './dto/session.dto'
import { Repository } from 'typeorm';
import { User } from '../users/users.entity';

@Injectable()
export class SessionsService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ){}

  public async create(session: CreateSessionDto): Promise<SessionDto | false>{
    const user = await this.usersRepository.findOne({where: {email: session.email}})

    if(user) {
      const token: string = user.generateToken();

      return {
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        token,
      }
    }

    return false
  }


}
