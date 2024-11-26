import { Next } from 'koa';
import Router from 'koa-router';
import { route, GET } from 'awilix-koa';
import { IApi } from '@interfaces/IApi';

@route('/api')
export default class ApiController {
  private apiSerivce: IApi;
  constructor({ apiService }: { apiService: IApi }) {
    this.apiSerivce = apiService;
  }

  @GET()
  @route('/list')
  async actionList(ctx: Router.IRouterContext, next: Next): Promise<void> {
    const data = await this.apiSerivce.getInfo();
    ctx.body = { data };
  }
}
