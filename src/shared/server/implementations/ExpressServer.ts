import express, { Express, NextFunction, Request, Response } from 'express';

import IServer, { IHandler } from '../interfaces/IServer';

import BaseServer from './base/BaseServer';

export default class ExpressServer
  extends BaseServer
  implements IServer<Express, Request, Response, NextFunction>
{
  private server: Express;

  constructor() {
    super();
    this.server = express();
    this.server.use(express.json());
    this.registerRoutes(this);
  }

  get(
    path: string,
    ...handles: IHandler<Request, Response, NextFunction>[]
  ): void {
    this.server.get(path, handles);
  }

  post(
    path: string,
    ...handles: IHandler<Request, Response, NextFunction>[]
  ): void {
    this.server.post(path, handles);
  }

  put(
    path: string,
    ...handles: IHandler<Request, Response, NextFunction>[]
  ): void {
    this.server.put(path, handles);
  }

  patch(
    path: string,
    ...handles: IHandler<Request, Response, NextFunction>[]
  ): void {
    this.server.patch(path, handles);
  }

  delete(
    path: string,
    ...handles: IHandler<Request, Response, NextFunction>[]
  ): void {
    this.server.delete(path, handles);
  }

  public listen(port: number): void {
    this.server.listen(port, () => {
      // eslint-disable-next-line no-console
      console.info(
        'Express server is running on port [%s] in [%s] mode.',
        port,
        process.settings.app.nodeEnv
      );
    });
  }

  public async getServer(): Promise<Express> {
    return this.server;
  }
}
