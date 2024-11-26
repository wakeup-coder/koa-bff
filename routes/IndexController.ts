import { GET, route } from 'awilix-koa';
import { Context } from '@interfaces/IKoa';

@route('/')
class IndexController {
  @GET()
  async actionList(ctx: Context): Promise<void> {
    ctx.body = await ctx.render('index', { name: 'Koa' });
  }
}

export default IndexController;
