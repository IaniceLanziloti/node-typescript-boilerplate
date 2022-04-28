import { inject, injectable } from 'inversify';
import { TYPES } from 'settings/types';

import Balances from '../repositories/entities/Balances';
import IBalancesRepository from '../repositories/interfaces/IBalancesRepository';

interface IRequestDTO {
  balance_id: string;
}

@injectable()
export default class ShowBalancesService {
  public constructor(
    @inject(TYPES.BalancesRepository)
    private balancesRepository: IBalancesRepository
  ) {
    //
  }

  public async execute({ balance_id }: IRequestDTO): Promise<Balances | null> {
    const balance = await this.balancesRepository.findById(balance_id);

    if (!balance) {
      throw new Error('Balance not found');
    }

    return balance;
  }
}
