import { Test, TestingModule } from '@nestjs/testing';
import { SessionService } from '../repository/session.service';

describe('SessionService', () => {
  let service: SessionService;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SessionService],
    }).compile();
    service = module.get<SessionService>(SessionService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
