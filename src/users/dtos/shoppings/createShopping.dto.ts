import { IsNumber, IsPositive } from 'class-validator';

export class CreateShoppingDTO {
  @IsNumber()
  @IsPositive()
  bookId: number;

  @IsNumber()
  @IsPositive()
  clientId: number;

  @IsNumber()
  @IsPositive()
  quantity: number;
}
