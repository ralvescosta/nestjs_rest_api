import { User } from './users.entity';
import { EntityRepository, Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  createDog = async (dogDto: UserDto) => {
    return await this.save(dogDto);
  };
}
