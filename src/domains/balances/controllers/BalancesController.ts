import container from '../../../shared/container';
import { Request, Response, Next } from '../../../shared/server';
import IControllers from '../../../shared/server/interfaces/IContollers';
import CreateBalancesService from '../services/CreateBalancesService';
import ListBalancesServices from '../services/ListBalancesService';
import ShowBalancesServices from '../services/ShowBalancesService';

export default class BalancesController
  implements IControllers<Request, Response, Next>
{
  public async index(request: Request, response: Response): Promise<Response> {
    const listBalancesServices = container.get<ListBalancesServices>(
      'ListBalancesServices'
    );

    const balances = await listBalancesServices.execute();

    return response.send(balances);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { type, amount } = request.body;

    const createBalancesService = new CreateBalancesService();

    const balance = await createBalancesService.execute({
      type,
      amount,
    });

    return response.send(balance);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { balance_id } = request.params;

    const showBalancesServices = container.get<ShowBalancesServices>(
      'ShowBalancesServices'
    );
    const balance = await showBalancesServices.execute({ balance_id });

    return response.json(balance);
  }
}
