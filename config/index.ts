import path from 'path';
import { extend } from 'lodash';

export interface IConfig {
  viewDir: string;
  staticDir: string;
  port: number;
  memory: false | 'memory';
};

let config: IConfig = {
  viewDir: path.join(__dirname, '../views'),
  staticDir: path.join(__dirname, '../assets'),
  port: 8081,
  memory: false,
};

// if (process.env.NODE_ENV === 'development') {
//   config = extend(config, { port: 8081 });
// }

if (process.env.NODE_ENV === 'production') {
  config = extend(config, {
    port: 8082,
    memory: 'memory',
  });
}

export default config;
