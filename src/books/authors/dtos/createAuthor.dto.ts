import { IsString, IsNotEmpty, MaxLength, IsLowercase } from 'class-validator';

export class CreateAuthorDTO {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  @IsLowercase()
  name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  @IsLowercase()
  last_name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  @IsLowercase()
  second_last_name: string;
}
