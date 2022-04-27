import { randomUUID } from 'node:crypto';

import ICreateBalancesDTO from '../../../dtos/ICreateBalancesDTO';
import Balances from '../../entities/Balances';
import IBalancesRepository from '../../interfaces/IBalancesRepository';

export default class FakeBalancesRepository implements IBalancesRepository {
  private balances: Balances[];

  constructor() {
    this.balances = [];
  }

  async find(): Promise<Balances[]> {
    return this.balances;
  }

  async findById(balance_id: string): Promise<Balances | null> {
    const findBalance =
      this.balances.find((balance) => balance.id === balance_id) || null;

    return findBalance;
  }

  async create({ amount, type }: ICreateBalancesDTO): Promise<Balances> {
    const balance = new Balances();
    const now = new Date();

    Object.assign(balance, {
      id: randomUUID(),
      created_at: now,
      updated_at: now,
      deleted_at: null,
      type,
      amount,
    });

    return balance;
  }

  async delete(balance: Balances): Promise<void> {
    this.balances = this.balances.filter(
      (element) => element.id !== balance.id
    );
  }
}
