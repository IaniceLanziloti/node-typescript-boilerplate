import IServer from './IServer';

export interface IRegisterRoute<ServerType> {
  (server: IServer<ServerType, any, any, any>): void;
}
