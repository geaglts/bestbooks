import { Test, TestingModule } from '@nestjs/testing';
import { ShoppingsController } from './shoppings.controller';

describe('ShoppingsController', () => {
  let controller: ShoppingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShoppingsController],
    }).compile();

    controller = module.get<ShoppingsController>(ShoppingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
