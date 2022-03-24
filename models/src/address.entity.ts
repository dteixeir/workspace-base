import { Column, Table } from 'sequelize-typescript';
import { BaseEntity, IBaseEntity } from './base-entity.interface';

export interface IAddress extends IBaseEntity {
  line1: string;
  line2: string;
  city: string;
  state: string;
  postalCode: string;
}

@Table({ paranoid: true, timestamps: true })
export class Address extends BaseEntity implements IAddress {
  @Column
  line1: string;

  @Column
  line2: string;

  @Column
  city: string;

  @Column
  state: string;

  @Column
  postalCode: string;
}