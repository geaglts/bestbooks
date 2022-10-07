import {
  IsNotEmpty,
  IsLowercase,
  MaxLength,
  IsString,
  IsNumber,
  IsInt,
  IsPositive,
} from 'class-validator';

export class CreateBookDTO {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  @IsLowercase()
  name: string;

  @IsPositive()
  @IsNotEmpty()
  @IsInt()
  pages: number;

  @IsPositive()
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsPositive()
  @IsNotEmpty()
  @IsInt()
  quantity: number;

  @IsPositive()
  @IsInt()
  publisherId: number;

  @IsPositive()
  @IsNotEmpty()
  @IsInt()
  publication_year: number;
}
