import { PartialType } from '@nestjs/swagger';
import { CreateClientDTO } from './createClient.dto';

export class UpdateClientDTO extends PartialType(CreateClientDTO) {}
