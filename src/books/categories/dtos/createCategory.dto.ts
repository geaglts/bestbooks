import { IsString, IsNotEmpty, MaxLength, IsLowercase } from 'class-validator';

export class CreateCategoryDTO {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  @IsLowercase()
  name: string;
}
