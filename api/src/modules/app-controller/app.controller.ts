import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { IAddress } from '@test/models';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService
  ) { }

  @Get()
  getHello(): IAddress {
    return this.appService.get();
  }

  @Post('validate')
  async validate(@Body() address: IAddress): Promise<IAddress> {
    return await this.appService.validate(address);
  }
}
