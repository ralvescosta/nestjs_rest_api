import { Users } from './user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';

@EntityRepository(Users)
export class UserRepository extends Repository<Users> {
  createDog = async (dogDto: UserDto) => {
    return await this.save(dogDto);
  };
}
