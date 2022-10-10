import { IsString, IsNotEmpty, Length, IsLowercase } from 'class-validator';

export class CreateClientDTO {
  @IsString()
  @IsNotEmpty()
  @Length(50)
  @IsLowercase()
  name: string;

  @IsString()
  @IsNotEmpty()
  @Length(50)
  @IsLowercase()
  last_name: string;

  @IsString()
  @IsNotEmpty()
  @Length(50)
  @IsLowercase()
  second_last_name: string;
}
