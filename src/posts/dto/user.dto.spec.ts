import { UserDto } from './post.dto';

describe('Users', () => {
  it('should be defined', () => {
    expect(new UserDto()).toBeDefined();
  });
});
