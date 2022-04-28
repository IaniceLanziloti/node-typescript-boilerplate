import BalancesRepository from 'domains/balances/repositories/implementations/sequelize/BalancesRepository';
import IBalancesRepository from 'domains/balances/repositories/interfaces/IBalancesRepository';
import CreateBalancesService from 'domains/balances/services/CreateBalancesService';
import ListBalancesService from 'domains/balances/services/ListBalancesService';
import ShowBalancesService from 'domains/balances/services/ShowBalancesService';
import { Container } from 'inversify';
import { TYPES } from 'settings/types';

const container = new Container();

container
  .bind<IBalancesRepository>(TYPES.BalancesRepository)
  .to(BalancesRepository)
  .inSingletonScope();

container
  .bind<CreateBalancesService>('CreateBalancesService')
  .to(CreateBalancesService)
  .inSingletonScope();

container
  .bind<ListBalancesService>('ListBalancesService')
  .to(ListBalancesService)
  .inSingletonScope();

container
  .bind<ShowBalancesService>('ShowBalancesService')
  .to(ShowBalancesService)
  .inSingletonScope();

export default container;
