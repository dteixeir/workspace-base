import { IAddress } from '@test/models'
import { object, string } from 'yup';
import { Shape } from './base';

export const addressValidator = object<Shape<IAddress>>({
  line1: string().required('Currency is required'),
  line2: string().required('Currency is required'),
  city: string().required('Currency is required'),
  state: string().required('Currency is required'),
  postalCode: string().required('Currency is required')
});
