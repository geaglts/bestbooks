import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

class CreatePublisherDTO {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(4)
  readonly short_name: string;
}

export default CreatePublisherDTO;
