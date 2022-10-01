import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    const parsedValue = parseInt(value, 10);
    if (isNaN(parsedValue)) {
      throw new BadRequestException(`${parsedValue} is not a value`);
    }
    return parsedValue;
  }
}
