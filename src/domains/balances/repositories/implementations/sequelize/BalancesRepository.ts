import { injectable } from 'inversify';
import { Repository } from 'sequelize-typescript';

import ICreateBalancesDTO from '../../../dtos/ICreateBalancesDTO';
import Balances from '../../entities/Balances';
import IBalancesRepository from '../../interfaces/IBalancesRepository';

@injectable()
export default class BalancesRepository implements IBalancesRepository {
  private repository: Repository<Balances>;

  constructor() {
    this.repository = Balances;
  }

  async find(): Promise<Balances[]> {
    const balances = await this.repository.findAll({});
    return balances;
  }

  async findById(balance_id: string): Promise<Balances | null> {
    const balance = await this.repository.findByPk(balance_id);
    return balance;
  }

  async create({ type, amount }: ICreateBalancesDTO): Promise<Balances> {
    const balance = new Balances({
      type,
      amount,
    });

    await balance.save();

    return balance;
  }
}
