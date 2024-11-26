// import { addAliases } from 'module-alias';

// addAliases({
//   '@': __dirname,
//   '@app': __dirname,
//   '@config': `${__dirname}/config`,
//   '@interfaces': `${__dirname}/interfaces`,
//   '@middlewares': `${__dirname}/middlewares`,
// });

// Use package.json _moduleAliases
import 'module-alias/register';
import Koa from 'koa';
import path from 'path';
import log4js from 'log4js';
import co from 'co';
import render from 'koa-swig';
import serve from 'koa-static';
import { createContainer, Lifetime } from 'awilix';
import { loadControllers, scopePerRequest } from 'awilix-koa';
import historyApiFallback from 'koa2-connect-history-api-fallback';
import config from '@config/index';
import ErrorHandler from '@middlewares/ErrorHandler';

log4js.configure({
  appenders: { cheese: { type: 'file', filename: path.resolve(__dirname, 'logs/cheese.log') } },
  categories: { default: { appenders: ['cheese'], level: 'error' } },
});

const app = new Koa();
const logger = log4js.getLogger('cheese');
const { port, viewDir, staticDir, memory } = config;

app.context.render = co.wrap(render({
  root: viewDir,
  autoescape: true,
  cache: memory, // disable, set to false
  ext: 'html',
}));

app.use(serve(staticDir));

ErrorHandler.error(app, logger);
app.use(historyApiFallback({ index: '/', whiteList: ['/api'] }));

// awilix-koa start
// ========================================
const container = createContainer();
// Load services
container.loadModules(['services/*.ts'], {
  formatName: 'camelCase',
  resolverOptions: { lifetime: Lifetime.SCOPED },
})
app.use(scopePerRequest(container));
// Load controllers
app.use(loadControllers('routes/*.ts', { cwd: __dirname }));
// awilix-koa end
// ========================================

app.listen(port, () => {
  console.log('Server Started ============================');
});
