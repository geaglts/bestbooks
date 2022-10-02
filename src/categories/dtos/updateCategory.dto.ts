import { PartialType } from '@nestjs/mapped-types';
import CreateCategoryDTO from './createCategory.dto';

class UpdateCategoryDTO extends PartialType(CreateCategoryDTO) {}

export default UpdateCategoryDTO;
