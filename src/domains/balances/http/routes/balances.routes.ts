import { IRegisterRoute } from '../../../../shared/server/interfaces/IRegisterRoute';
import IServer from '../../../../shared/server/interfaces/IServer';
import BalancesController from '../controllers/BalancesController';

const register: IRegisterRoute<IServer<any, any, any, any>> = (
  server: IServer<any, any, any, any>
) => {
  const balancesController = new BalancesController();

  server.get('/balances', balancesController.index);
  server.post('/balances', balancesController.create);

  server.get('/balances/:balance_id', balancesController.show);
  server.delete('/balances/:balance_id', balancesController.delete);
};

export { register };
