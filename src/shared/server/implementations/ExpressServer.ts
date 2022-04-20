import express, { Express } from 'express';

import IServer from '../interfaces/IServer';

import BaseServer from './base/BaseServer';

export default class ExpressServer
  extends BaseServer
  implements IServer<Express>
{
  private server: Express;

  constructor() {
    super();
    this.server = express();
    this.server.use(express.json());
    this.registerRoutes(this.server);
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
