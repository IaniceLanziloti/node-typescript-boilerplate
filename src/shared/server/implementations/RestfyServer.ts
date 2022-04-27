import restify, { Server, Request, Response, Next } from 'restify';

import IServer, { IHandler } from '../interfaces/IServer';

import BaseServer from './base/BaseServer';

export default class RestifyServer
  extends BaseServer
  implements IServer<Server, Request, Response, Next>
{
  private server: Server;

  constructor() {
    super();
    this.server = restify.createServer();
    this.server.use(restify.plugins.jsonBodyParser());
    this.registerRoutes(this);
  }

  get(path: string, ...handles: IHandler<Request, Response, Next>[]): void {
    this.server.get(path, handles);
  }

  post(path: string, ...handles: IHandler<Request, Response, Next>[]): void {
    this.server.post(path, handles);
  }

  put(path: string, ...handles: IHandler<Request, Response, Next>[]): void {
    this.server.put(path, handles);
  }

  patch(path: string, ...handles: IHandler<Request, Response, Next>[]): void {
    this.server.patch(path, handles);
  }

  delete(path: string, ...handles: IHandler<Request, Response, Next>[]): void {
    this.server.del(path, handles);
  }

  public listen(port: number): void {
    this.server.listen(port, () => {
      // eslint-disable-next-line no-console
      console.info(
        'Restify server is running on port [%s] in [%s] mode.',
        port,
        process.settings.app.nodeEnv
      );
    });
  }

  public async getServer(): Promise<Server> {
    return this.server;
  }
}
