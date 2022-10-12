import { IsNumber, IsPositive, IsInt } from 'class-validator';

export class CreateShoppingItemDTO {
  @IsNumber()
  @IsPositive()
  @IsInt()
  bookId: number;

  @IsNumber()
  @IsPositive()
  @IsInt()
  shoppingId: number;

  @IsNumber()
  @IsPositive()
  @IsInt()
  quantity: number;
}
