import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { GetCurrentUserById } from './utils';

@Controller('/')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  getHello(@GetCurrentUserById() userId: number): string {
    console.log('getHello() controller', userId);
    return this.appService.getHello(userId);
  }
}
