import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class IntArrayPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    try {
      const intArray = JSON.parse(value);
      return intArray;
    } catch {
      throw new BadRequestException();
    }
  }
}
