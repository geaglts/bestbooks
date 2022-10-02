import { IsString, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateAuthorDTO {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  name: string;
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  last_name: string;
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  second_last_name: string;
}
