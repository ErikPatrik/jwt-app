import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(userId: number): string {
    return `Hello World! ${userId}`;

    // const user = await this.usersRepository.findOne({
    //     where: {
    //         id: userId
    //     }
    // })
  }
}
