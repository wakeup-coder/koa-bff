import { IApi } from '@interfaces/IApi';
import { IData } from '@interfaces/IData';

export default class ApiService implements IApi {
  getInfo() {
    return new Promise<IData>(resolve => resolve({
      item: '我是后台数据🌺',
      result: [1, 'next'],
    }));
  }
}
