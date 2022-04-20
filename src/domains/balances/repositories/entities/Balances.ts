import {
  Column,
  CreatedAt,
  DeletedAt,
  IsUUID,
  PrimaryKey,
  UpdatedAt,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';

@Table({
  name: {
    plural: 'balances',
    singular: 'balance',
  },
})
export default class Balances extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Column({
    type: DataType.UUIDV4,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

  @DeletedAt
  deleted_at: Date;

  @Column({ type: DataType.BIGINT })
  type: number;

  @Column({ type: DataType.NUMBER })
  amount: string;
}
