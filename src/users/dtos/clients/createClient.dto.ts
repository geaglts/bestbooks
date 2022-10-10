import { IsString, IsNotEmpty, IsLowercase, MaxLength } from 'class-validator';

export class CreateClientDTO {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  @IsLowercase()
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  @IsLowercase()
  last_name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  @IsLowercase()
  second_last_name: string;
}
