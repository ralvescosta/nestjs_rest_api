/* eslint-disable @typescript-eslint/camelcase */
import { Injectable } from '@nestjs/common';
import { UserDto } from '../dto/user.dto'
import { CreateUserDto } from '../dto/create.user.dto'
import { UpdateUserDto } from '../dto/update.user.dto'


@Injectable()
export class UsersService {
    private users: UserDto[] = [
    {
      id: 1,
      name: 'Rafael',
      email: 'rafael@email.com',
      password: '123456',
      created_at: "1",
      updated_at: "2",
    }
  ]

  public create(user: CreateUserDto): {}{
    let id = 0;
    if(this.users.length){
      id = this.users[this.users.length -1].id + 1;
    }
    user.id = id;
    this.users.push(user)
    return {}
  }

  public getAll(): UserDto[]{
    return this.users;
  }

  public getById(id: number): UserDto{
    const user: UserDto = this.users.find((user) => user.id == id)
    return user
  }

  public update(id: number, user:UpdateUserDto): {}{
    console.log(id, user)
    return {}
  }

}
