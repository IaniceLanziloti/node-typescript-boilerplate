import { Next, Request, Response } from '../../../shared/server';
import IControllers from '../../../shared/server/interfaces/IContollers';

export default class CustomersController
  implements IControllers<Request, Response, Next>
{
  async index(request: Request, response: Response): Promise<Response> {
    return response.send();
  }
}
