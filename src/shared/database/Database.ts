import { Sequelize } from 'sequelize-typescript';

import Balances from '../../domains/balances/repositories/entities/Balances';

export default class Database {
  private sequelize: Sequelize;

  public connect(): Sequelize {
    const { host, port, database, username, password } = process.settings.db;

    const options = {};

    Object.assign(options, {
      host,
      port,
      dialect: 'postgres',
      define: {
        freezeTableName: true,
        timestamps: false,
      },
      models: [Balances],
      logging: false,
    });

    this.sequelize = new Sequelize(database, username, password, options);
    return this.sequelize;
  }

  public connection(): Sequelize {
    return this.sequelize;
  }
}
