import {
  IsNotEmpty,
  IsLowercase,
  MaxLength,
  IsString,
  IsNumber,
  IsInt,
  IsPositive,
  IsArray,
  ArrayNotEmpty,
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

  @IsArray()
  @ArrayNotEmpty()
  @IsNumber({}, { each: true })
  categoriesIds: number[];

  @IsArray()
  @ArrayNotEmpty()
  @IsNumber({}, { each: true })
  authorsIds: number[];
}
