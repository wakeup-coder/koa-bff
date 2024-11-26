module.exports = {
  apps: [
    {
      name: 'koa-bff',
      // 使用本项目里安装的 ts-node (好像windows上无法执行)
      script: './node_modules/.bin/ts-node',
      args: '-- ./app.ts',

      // 使用 node 执行 ts-node/register
      // script: './app.ts',
      // interpreter: 'node',
      // interpreter_args: '-r ts-node/register',

      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: true,
      ignore_watch: [
        'node_modules',
        'logs',
      ],
      env: {
        NODE_ENV: 'development',
        TS_NODE_PROJECT: './tsconfig.json',
      },
      env_production: {
        NODE_ENV: 'production',
        TS_NODE_PROJECT: './tsconfig.json',
      },
      merge_logs: true,
      error_file: './logs/errors.log',
      out_file: './logs/infos.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
    },
  ],
};
