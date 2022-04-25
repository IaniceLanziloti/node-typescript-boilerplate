import { inject, injectable } from 'inversify';

import { TYPES } from '../../../settings/types';
import Balances from '../repositories/entities/Balances';
import IBalancesRepository from '../repositories/interfaces/IBalancesRepository';

interface IRequestDTO {
  type: number;
  amount: number;
}
@injectable()
export default class CreateBalancesService {
  public constructor(
    @inject(TYPES.BalancesRepository)
    private balancesRepository: IBalancesRepository
  ) {
    //
  }

  public async execute({ type, amount }: IRequestDTO): Promise<Balances> {
    const balance = await this.balancesRepository.create({ type, amount });

    return balance;
  }
}
