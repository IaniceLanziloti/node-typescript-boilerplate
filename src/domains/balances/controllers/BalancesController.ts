import container from '../../../shared/container';
import { Request, Response, Next } from '../../../shared/server';
import IControllers from '../../../shared/server/interfaces/IContollers';
import CreateBalancesService from '../services/CreateBalancesService';
import ListBalancesService from '../services/ListBalancesService';
import ShowBalancesService from '../services/ShowBalancesService';

export default class BalancesController
  implements IControllers<Request, Response, Next>
{
  public async index(request: Request, response: Response): Promise<Response> {
    const listBalancesService = container.get<ListBalancesService>(
      'ListBalancesService'
    );

    const balances = await listBalancesService.execute();

    return response.send(balances);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { type, amount } = request.body;

    const createBalancesService = container.get<CreateBalancesService>(
      'CreateBalancesService'
    );

    const balance = await createBalancesService.execute({
      type,
      amount,
    });

    return response.send(balance);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { balance_id } = request.params;

    const showBalancesService = container.get<ShowBalancesService>(
      'ShowBalancesService'
    );
    const balance = await showBalancesService.execute({ balance_id });

    return response.send(balance);
  }
}
