import { Test, TestingModule } from '@nestjs/testing';
import { SessionsService } from './sessions.service';

describe('SessionsService', () => {
  let provider: SessionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SessionsService],
    }).compile();

    provider = module.get<SessionsService>(SessionsService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
