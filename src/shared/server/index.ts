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
import RestifyServer from './implementations/RestfyServer';

const servers = {
  restify: () => new RestifyServer(),
  express: () => new ExpressServer(),
};

const server = servers[process.settings.app.serverType]();

export default server;

export type Request = ExpressRequest | RestifyRequest;
export type Response = ExpressResponse | RestifyResponse;
export type Next = ExpressNext | RestifyNext;
