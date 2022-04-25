import { inject, injectable } from 'inversify';

import { TYPES } from '../../../settings/types';
import Balances from '../repositories/entities/Balances';
import IBalancesRepository from '../repositories/interfaces/IBalancesRepository';

@injectable()
export default class ListBalancesService {
  public constructor(
    @inject(TYPES.BalancesRepository)
    private balancesRepository: IBalancesRepository
  ) {
    //
  }

  public async execute(): Promise<Balances[]> {
    const balances = await this.balancesRepository.find();

    return balances;
  }
}
