import ICreateBalancesDTO from '../../dtos/ICreateBalancesDTO';
import Balances from '../entities/Balances';

export default interface IBalancesRepository {
  find(): Promise<Balances[]>;
  findById(balance_id: string): Promise<Balances | null>;
  create(params: ICreateBalancesDTO): Promise<Balances>;

  delete(balance: Balances): Promise<void>;
}
