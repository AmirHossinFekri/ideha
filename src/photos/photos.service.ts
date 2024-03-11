import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PhotoEntity } from './entities/photos.entity';
import { Repository } from 'typeorm';
import { UsersService } from 'src/users/users.service';
import { PropertyEntity } from 'src/properties/entity/property.entity';

@Injectable()
export class PhotosService {
  constructor(
    @InjectRepository(PhotoEntity)
    private readonly PHOTO: Repository<PhotoEntity>,

    @InjectRepository(PropertyEntity)
    private readonly PROPERTY: Repository<PropertyEntity>,

    private readonly userService: UsersService,
  ) {}
}
