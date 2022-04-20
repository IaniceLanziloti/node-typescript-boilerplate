export default interface IControllers<Request, Response, Next> {
  index?(request: Request, response: Response, next: Next): Promise<Response>;
  create?(request: Request, response: Response, next: Next): Promise<Response>;
  show?(request: Request, response: Response, next: Next): Promise<Response>;
  update?(request: Request, response: Response, next: Next): Promise<Response>;
  delete?(request: Request, response: Response, next: Next): Promise<Response>;
}
