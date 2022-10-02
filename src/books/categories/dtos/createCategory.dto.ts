import { IsString, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateCategoryDTO {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  name: string;
}
