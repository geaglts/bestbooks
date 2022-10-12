import { IsNumber, IsPositive } from 'class-validator';

export class CreateShoppingDTO {
  @IsNumber()
  @IsPositive()
  readonly clientId: number;
}
