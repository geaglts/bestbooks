import { PartialType } from '@nestjs/swagger';
import { CreateShoppingDTO } from './createShopping.dto';

export class UpdateShoppingDTO extends PartialType(CreateShoppingDTO) {}
