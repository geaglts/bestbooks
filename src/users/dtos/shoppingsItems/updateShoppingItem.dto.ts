import { PartialType } from '@nestjs/swagger';
import { CreateShoppingItemDTO } from './createShoppingItem.dto';

export class UpdateShoppingItemDTO extends PartialType(CreateShoppingItemDTO) {}
