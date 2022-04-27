import fastify, {
  FastifyInstance,
  FastifyRequest,
  FastifyReply,
  RouteHandlerMethod,
} from 'fastify';

import IServer, { IHandler } from '../interfaces/IServer';

import BaseServer from './base/BaseServer';

export default class FastifyServer
  extends BaseServer
  implements IServer<FastifyInstance, FastifyRequest, FastifyReply, any>
{
  private server: FastifyInstance;

  constructor() {
    super();
    this.server = fastify();
    this.registerRoutes(this);
  }

  get(
    path: string,
    ...handles: IHandler<FastifyRequest, FastifyReply, any>[]
  ): void {
    const handle = handles[0] as RouteHandlerMethod;
    this.server.get(path, {}, handle);
  }

  post(
    path: string,
    ...handles: IHandler<FastifyRequest, FastifyReply, any>[]
  ): void {
    const handle = handles[0] as RouteHandlerMethod;
    this.server.post(path, {}, handle);
  }

  put(
    path: string,
    ...handles: IHandler<FastifyRequest, FastifyReply, any>[]
  ): void {
    const handle = handles[0] as RouteHandlerMethod;
    this.server.put(path, {}, handle);
  }

  patch(
    path: string,
    ...handles: IHandler<FastifyRequest, FastifyReply, any>[]
  ): void {
    const handle = handles[0] as RouteHandlerMethod;
    this.server.patch(path, {}, handle);
  }

  delete(
    path: string,
    ...handles: IHandler<FastifyRequest, FastifyReply, any>[]
  ): void {
    const handle = handles[0] as RouteHandlerMethod;
    this.server.delete(path, {}, handle);
  }

  public listen(port: number): void {
    this.server.listen(port, () => {
      // eslint-disable-next-line no-console
      console.info(
        'Fastify server is running on port [%s] in [%s] mode.',
        port,
        process.settings.app.nodeEnv
      );
    });
  }

  public async getServer(): Promise<FastifyInstance> {
    return this.server;
  }
}
