import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from './dto';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const users = require('../users.json');

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  signinLocal(dto: AuthDto) {
    const user = users.find((_user) => _user.email === dto.email);
    if (!user) throw new UnauthorizedException('Credentials incorret');
    if (user.password !== dto.password)
      throw new UnauthorizedException('Password does not match');

    return this.signUser(user.id, user.email, 'user');
  }

  signUser(userId: number, email: string, type: string) {
    return this.jwtService.sign({
      sub: userId,
      email,
      clain: type,
    });
  }
}
