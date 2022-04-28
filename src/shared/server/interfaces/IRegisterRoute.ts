export interface IRegisterRoute<ServerType> {
  (server: ServerType): void;
}
