import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthorDTO } from './createAuthor.dto';

export class UpdateAuthorDTO extends PartialType(CreateAuthorDTO) {}
