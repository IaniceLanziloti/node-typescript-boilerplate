export interface IHandler<Req, Res, Nxt> {
  (request: Req, response: Res, next: Nxt): Promise<Res>;
}

// interface IRoute {
//   path: string;
//   handles: Array<IHandler<Request, Response, Next>>;
// }

export default interface IServer<ServerType, Req, Res, Nxt> {
  getServer(): Promise<ServerType>;
  registerRoutes(server: ServerType, routesPaths: string[]): Promise<void>;

  listen(port: number): void;

  get(path: string, ...handles: Array<IHandler<Req, Res, Nxt>>): void;
  post(path: string, ...handles: Array<IHandler<Req, Res, Nxt>>): void;
  put(path: string, ...handles: Array<IHandler<Req, Res, Nxt>>): void;
  patch(path: string, ...handles: Array<IHandler<Req, Res, Nxt>>): void;
  delete(path: string, ...handles: Array<IHandler<Req, Res, Nxt>>): void;
}
