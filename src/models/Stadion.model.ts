import { Model, Optional, DataTypes } from 'sequelize';
import sequelize from '../db';

interface StadionAttributes {
  id: number;
  title: string;
  address: string;
}

interface StadionCreationAttributes extends Optional<StadionAttributes, 'id'> {}

export default class Stadion
  extends Model<StadionAttributes, StadionCreationAttributes>
  implements StadionAttributes
{
  public id!: number;
  public title!: string;
  public address!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Stadion.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING },
    address: { type: DataTypes.STRING },
  },
  {
    sequelize,
    modelName: 'Stadion',
  },
);
