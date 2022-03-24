import { Column, DataType, Default, IsUUID, Model, PrimaryKey } from "sequelize-typescript"

export interface IBaseEntity {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export class BaseEntity extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column
  id: string;
}
