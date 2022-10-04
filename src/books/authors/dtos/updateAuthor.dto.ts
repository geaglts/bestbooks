import { PartialType } from '@nestjs/swagger';
import { CreateAuthorDTO } from './createAuthor.dto';

export class UpdateAuthorDTO extends PartialType(CreateAuthorDTO) {}
