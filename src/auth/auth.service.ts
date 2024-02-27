import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/users/entity/user.entity';
import { Repository } from 'typeorm';
import { registerDTO } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity) private readonly USER: Repository<UserEntity>,
  ) {}

  async register(registerData: registerDTO) {
    return new HttpException({ registerData }, HttpStatus.ACCEPTED);
  }
}
