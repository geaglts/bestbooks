import { PartialType } from '@nestjs/swagger';
import { CreateCategoryDTO } from './createCategory.dto';

export class UpdateCategoryDTO extends PartialType(CreateCategoryDTO) {}
