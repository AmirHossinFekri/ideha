import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly USER: Repository<UserEntity>,
  ) {}

  async findOne(username: string) {
    try {
      return await this.USER.findOne({ where: { username } });
    } catch (error) {
      return null;
    }
  }

  async;
}
