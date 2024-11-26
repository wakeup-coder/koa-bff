import * as Koa from 'koa';
import { SwigRenderer } from 'koa-swig';

export interface Context extends Koa.Context {
  render: SwigRenderer;
}
