import { PartialType } from '@nestjs/swagger';
import CreatePublisherDTO from './createPublisher.dto';

class UpdatePublisherDTO extends PartialType(CreatePublisherDTO) {}

export default UpdatePublisherDTO;
