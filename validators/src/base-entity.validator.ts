import { object, string } from 'yup';
import { IBaseEntity } from '@test/models'
import { Shape } from './base';

export const baseEntityValidator = object<Shape<IBaseEntity>>({
  id: string().required('Id is required'),
  createdAt: string().optional(),
  updatedAt: string().optional(),
  deletedAt: string().optional()
})