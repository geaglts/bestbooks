import { PartialType } from '@nestjs/swagger';
import { CreateBookDTO } from './createBook.dto';

export class UpdateBookDTO extends PartialType(CreateBookDTO) {}
