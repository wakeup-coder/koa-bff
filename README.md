# koa-bff

## 项目简介
这是一个基于 Koa.js 和 TypeScript 开发的 BFF（Backend For Frontend）服务端应用，用于处理前端应用的服务端需求。

## 技术选型
- [Koa](https://koajs.com/) - 基于 Node.js 平台的下一代 Web 开发框架
- [TypeScript](https://www.typescriptlang.org/) - JavaScript 的超集，支持静态类型检查
- [Awilix](https://github.com/jeffijoe/awilix) - 轻量级依赖注入（DI）容器
- [Swig](https://node-swig.github.io/swig-templates/) - 高性能模板引擎
- [PM2](https://pm2.keymetrics.io/) - Node.js 应用进程管理工具
- [Log4js](https://log4js-node.github.io/log4js-node/) - 可靠的日志记录工具

## 目录结构
```
├── assets/             # 静态资源目录
├── config/             # 项目配置文件
├── interfaces/         # TypeScript 类型接口声明
├── logs/               # 日志文件目录
├── middlewares/        # Koa 中间件目录
├── routes/             # 路由配置目录
├── services/           # 业务逻辑服务
├── typings/            # 类型定义文件
├── views/              # 视图模板文件
├── app.ts              # 应用程序入口文件
└── ecosystem.config.js # PM2 环境配置文件
```

## 快速开始

### 环境准备
- Node.js (推荐 14.0.0 以上版本)
- npm 或 yarn 包管理工具

### 安装依赖
```bash
npm install
# 或者
yarn install
```

### 本地开发
```bash
npm run dev
# 或者
yarn dev
```

### 项目部署
```bash
npm start
# 或者
yarn start
```

## 项目特点
- 基于 TypeScript，提供完整的类型支持
- 使用依赖注入，实现松耦合的架构设计
- 支持服务端模板渲染
- 内置日志系统，便于问题排查
- 使用 PM2 进行进程管理，提供生产环境可靠性

## 开发规范
- 遵循 TypeScript 开发规范
- 使用 ESLint 进行代码检查
- 采用模块化设计，确保代码可维护性
