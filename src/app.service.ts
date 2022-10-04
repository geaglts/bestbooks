import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(
    @Inject('API_KEY') private apiKey: string,
    @Inject('RANDOM_KEY') private randomKey: string,
  ) {}

  getHello(): string {
    return 'Hello World!, ' + this.apiKey + ' - ' + this.randomKey;
  }
}
