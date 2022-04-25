import fastify, { FastifyInstance } from 'fastify';

import IServer from '../interfaces/IServer';

import BaseServer from './base/BaseServer';

export default class FastifyServer
  extends BaseServer
  implements IServer<FastifyInstance>
{
  private server: FastifyInstance;

  constructor() {
    super();
    this.server = fastify();
    this.registerRoutes(this.server);
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
