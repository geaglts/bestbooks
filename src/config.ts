import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    globalKey: process.env.GLOBAL_KEY,
  };
});
