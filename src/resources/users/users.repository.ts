import { User } from './users.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  createDog = async (dogDto: User) => {
    return await this.save(dogDto);
  };
}
