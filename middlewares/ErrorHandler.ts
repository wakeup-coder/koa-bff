import Koa from 'koa';
import type { Context, Next } from 'koa';
import { Logger } from 'log4js';

class ErrorHandler {
  static error(app: Koa, logger: Logger) {
    app.use(async (ctx: Context, next: Next) => {
      try {
        await next();
      } catch (e) {
        logger.error(e);
        ctx.body = '出错啦~恢复中.';
      }
    });

    app.use(async (ctx: Context, next: Next) => {
      await next();
      if (ctx.status !== 404) {
        return;
      }
      ctx.body = '<script src="//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js"></script>';
    });
  }
}
export default ErrorHandler;
