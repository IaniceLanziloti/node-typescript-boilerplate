import IServer from './IServer';

export interface IRegisterRoute<ServerType> {
  (server: IServer<ServerType>): void;
}
