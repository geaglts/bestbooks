import {
  IsNotEmpty,
  IsLowercase,
  MaxLength,
  IsString,
  IsNumber,
  IsInt,
  IsOptional,
} from 'class-validator';

export class CreateBookDTO {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  @IsLowercase()
  name: string;

  @IsNotEmpty()
  @IsInt()
  pages: number;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsInt()
  quantity: number;

  @IsOptional()
  @IsInt()
  publisher: number;

  @IsNotEmpty()
  @IsInt()
  publication_year: number;
}
