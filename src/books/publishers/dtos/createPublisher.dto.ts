import { IsNotEmpty, IsString, MaxLength, IsLowercase } from 'class-validator';

class CreatePublisherDTO {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  @IsLowercase()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(6)
  @IsLowercase()
  readonly short_name: string;
}

export default CreatePublisherDTO;
