import { Test, TestingModule } from '@nestjs/testing';
import { ShoppingsItemsService } from './shoppings-items.service';

describe('ShoppingsItemsService', () => {
  let service: ShoppingsItemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShoppingsItemsService],
    }).compile();

    service = module.get<ShoppingsItemsService>(ShoppingsItemsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
