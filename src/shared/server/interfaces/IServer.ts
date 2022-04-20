export default interface IServer<ServerType> {
  getServer(): Promise<ServerType>;
  registerRoutes(server: ServerType, routesPaths: string[]): Promise<void>;
  listen(port: number): void;
}
