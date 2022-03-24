import { Injectable } from '@nestjs/common';
import { IAddress } from '@test/models';
import { addressValidator } from '@test/validators';

@Injectable()
export class AppService {
  get(): IAddress {
    return {
      line1: 'line1',
      line2: 'line2',
      city: 'city',
      state: 'state',
      postalCode: 'postalCode'
    };
  }

  async validate(address: IAddress): Promise<any> {
    try {
      return await addressValidator.validate(address, { strict: true })
    } catch (err) { return err }
  }
}
