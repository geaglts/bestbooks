import { IsString, IsNotEmpty, MaxLength } from 'class-validator';

class CreateCategoryDTO {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  name: string;
}

export default CreateCategoryDTO;
