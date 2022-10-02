import { PartialType } from '@nestjs/mapped-types';
import CreatePublisherDTO from './createPublisher.dto';

class UpdatePublisherDTO extends PartialType(CreatePublisherDTO) {}

export default UpdatePublisherDTO;
