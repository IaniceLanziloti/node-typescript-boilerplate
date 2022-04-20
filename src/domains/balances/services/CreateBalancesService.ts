import Balances from '../repositories/entities/Balances';
import BalancesRepository from '../repositories/implementations/sequelize/BalancesRepository';

interface IRequestDTO {
  type: number;
  amount: number;
}

export default class CreateBalancesService {
  public async execute({ type, amount }: IRequestDTO): Promise<Balances> {
    const balancesRepository = new BalancesRepository();

    const balance = await balancesRepository.create({ type, amount });

    return balance;
  }
}
