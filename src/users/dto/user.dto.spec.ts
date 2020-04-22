import { UserDto } from './user.dto';

describe('Users', () => {
  it('should be defined', () => {
    expect(new UserDto()).toBeDefined();
  });
});
