import { Test, TestingModule } from '@nestjs/testing';
import { ShoppingsItemsController } from './shoppings-items.controller';

describe('ShoppingsItemsController', () => {
  let controller: ShoppingsItemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShoppingsItemsController],
    }).compile();

    controller = module.get<ShoppingsItemsController>(ShoppingsItemsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
