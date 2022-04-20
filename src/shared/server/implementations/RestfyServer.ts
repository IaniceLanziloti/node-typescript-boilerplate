import restify, { Server } from 'restify';

import IServer from '../interfaces/IServer';

import BaseServer from './base/BaseServer';

export default class RestifyServer
  extends BaseServer
  implements IServer<Server>
{
  private server: Server;

  constructor() {
    super();
    this.server = restify.createServer();
    this.server.use(restify.plugins.jsonBodyParser());
    this.registerRoutes(this.server);
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
