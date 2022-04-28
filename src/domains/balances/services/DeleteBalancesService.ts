import { inject, injectable } from 'inversify';
import { TYPES } from 'settings/types';

import IBalancesRepository from '../repositories/interfaces/IBalancesRepository';

interface IRequestDTO {
  balance_id: string;
}

@injectable()
export default class DeleteBalancesService {
  constructor(
    @inject(TYPES.BalancesRepository)
    private balancesRepository: IBalancesRepository
  ) {
    //
  }

  public async execute({ balance_id }: IRequestDTO): Promise<void> {
    const balance = await this.balancesRepository.findById(balance_id);

    if (!balance) {
      throw new Error('Balance not found');
    }

    await this.balancesRepository.delete(balance);
  }
}
