import {
  Request as ExpressRequest,
  Response as ExpressResponse,
  NextFunction as ExpressNext,
} from 'express';
import {
  Request as RestifyRequest,
  Response as RestifyResponse,
  Next as RestifyNext,
} from 'restify';

import ExpressServer from './implementations/ExpressServer';
import FastifyServer from './implementations/FastifyServer';
import RestifyServer from './implementations/RestfyServer';

export type Request = ExpressRequest | RestifyRequest;
export type Response = ExpressResponse | RestifyResponse;
export type Next = ExpressNext | RestifyNext;

const servers = {
  fastify: () => new FastifyServer(),
  restify: () => new RestifyServer(),
  express: () => new ExpressServer(),
};

const server = servers[process.settings.app.serverType]();

export default server;
