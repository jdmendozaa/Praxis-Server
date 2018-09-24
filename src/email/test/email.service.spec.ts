import { Test, TestingModule } from '@nestjs/testing';
import { EmailService } from '../repository/email.service';

describe('EmailService', () => {
  let service: EmailService;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmailService],
    }).compile();
    service = module.get<EmailService>(EmailService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});