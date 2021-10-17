import { Test, TestingModule } from '@nestjs/testing';
import { HumanController } from './human.controller';
import { HumanService } from './human.service';

describe('HumanController', () => {
  let controller: HumanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HumanController],
      providers: [HumanService],
    }).compile();

    controller = module.get<HumanController>(HumanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
