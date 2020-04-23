import { Test, TestingModule } from '@nestjs/testing';
import { PostsService } from './posts.service';

describe('PostsService', () => {
  let provider: PostsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostsService],
    }).compile();

    provider = module.get<PostsService>(PostsService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
