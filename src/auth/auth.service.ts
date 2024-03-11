import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import bcrypt from 'bcrypt';

import { UserEntity } from 'src/users/entity/user.entity';
import { registerDTO } from './dto/register.dto';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity) private readonly USER: Repository<UserEntity>,
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(registerData: registerDTO) {
    if (await this.findUser(registerData.username, registerData.email)) {
      throw new HttpException(
        'کاربری با این مشخصات وجود دارد',
        HttpStatus.BAD_REQUEST,
      );
    }

    const user = new UserEntity();
    user.email = registerData.email;
    user.username = registerData.username;
    user.password = await bcrypt.hash(registerData.password, 10);
    await this.USER.save(user);

    return new HttpException(
      'ثبت نام با موفقیت انجام شد ',
      HttpStatus.ACCEPTED,
    );
  }

  private async findUser(username: string, email: string): Promise<boolean> {
    const user = await this.USER.findOne({
      where: [{ username }, { email }],
    });
    return !!user;
  }

  async userValidate(username: string, password: string) {
    const user = await this.usersService.findOne(username);

    if (!user) {
      return null;
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      delete user.password;
      return user;
    }

    return null;
  }

  async UserLogin(user: { id: string; username: string }) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
