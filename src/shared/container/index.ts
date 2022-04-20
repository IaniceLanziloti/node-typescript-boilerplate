import { Container } from 'inversify';

import BalancesRepository from '../../domains/balances/repositories/implementations/sequelize/BalancesRepository';
import IBalancesRepository from '../../domains/balances/repositories/interfaces/IBalancesRepository';
import ListBalancesServices from '../../domains/balances/services/ListBalancesService';
import ShowBalancesServices from '../../domains/balances/services/ShowBalancesService';
import { TYPES } from '../../settings/types';

const container = new Container();

container
  .bind<IBalancesRepository>(TYPES.BalancesRepository)
  .to(BalancesRepository)
  .inSingletonScope();

container
  .bind<ListBalancesServices>('ListBalancesServices')
  .to(ListBalancesServices)
  .inSingletonScope();

container
  .bind<ShowBalancesServices>('ShowBalancesServices')
  .to(ShowBalancesServices)
  .inSingletonScope();

export default container;
