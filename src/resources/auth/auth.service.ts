/* eslint-disable @typescript-eslint/camelcase */
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../users/users.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
     private jwtService: JwtService
    ) {}

  public async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersRepository.findOne({where: {email}});
    if (user) {
      if(await user.comparePassHash(password)) {
        return user
      }
    }
    return null;
  }

  public async generateAccessToken(user: any): Promise<any> {
    const payload = { id: user.id };
    return { access_token: this.jwtService.sign(payload) };
  }
}
