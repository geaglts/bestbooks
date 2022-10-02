import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

class CreatePublisherDTO {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(4)
  readonly short_name: string;
}

export default CreatePublisherDTO;
