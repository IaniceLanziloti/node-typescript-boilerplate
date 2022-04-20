import fs from 'fs';
import { join, relative } from 'path';

import { IRegisterRoute } from '../../interfaces/IRegisterRoute';

export default class BaseServer {
  static MODULES_PATH: string = join(
    __dirname,
    '..',
    '..',
    '..',
    '..',
    'domains'
  );

  private getRoutesPaths(dirName: string = BaseServer.MODULES_PATH): string[] {
    const routes: string[] = [];
    const dirItemsPaths = fs
      .readdirSync(dirName)
      .map((item) => join(dirName, item));

    if (dirName.endsWith('/routes')) {
      routes.push(
        ...dirItemsPaths.filter((itemPath) => itemPath.endsWith('.ts'))
      );
      return routes;
    }

    const subFolders = dirItemsPaths.filter((itemPath) =>
      fs.statSync(itemPath).isDirectory()
    );

    subFolders.forEach((subFolder) =>
      routes.push(...this.getRoutesPaths(subFolder))
    );

    return routes;
  }

  public async registerRoutes(server: any): Promise<void> {
    const routesPaths = this.getRoutesPaths();

    await Promise.all(
      routesPaths.map(async (route) => {
        const routeRelativePath = relative(__dirname, route);
        const { register }: { register: IRegisterRoute<any> } = await import(
          routeRelativePath
        );

        register(server);
      })
    );
  }
}
