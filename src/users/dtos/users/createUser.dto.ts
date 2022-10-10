import {
  IsEmail,
  IsLowercase,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @IsLowercase()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @IsString()
  @IsNotEmpty()
  @IsLowercase()
  username: string;

  @IsOptional()
  @IsPositive()
  @IsNumber()
  clientId: number;
}
