import { IRegisterRoute } from '../../../shared/server/interfaces/IRegisterRoute';
import BalancesController from '../controllers/BalancesController';

const register: IRegisterRoute<any> = (server: any) => {
  const balancesController = new BalancesController();

  server.get('/balances', balancesController.index);
  server.post('/balances', balancesController.create);

  server.get('/balances/:balance_id', balancesController.show);
};

export { register };
