import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PhotoEntity } from './entities/photos.entity';
import { Repository } from 'typeorm';
import { UsersService } from 'src/users/users.service';
import { PropertyEntity } from 'src/properties/entity/property.entity';
import { PhotoDto } from './dto/photo.dto';

@Injectable()
export class PhotosService {
  constructor(
    @InjectRepository(PhotoEntity)
    private readonly PHOTO: Repository<PhotoEntity>,

    @InjectRepository(PropertyEntity)
    private readonly PROPERTY: Repository<PropertyEntity>,

    private readonly userService: UsersService,
  ) {}

  async storeIdeha(photoData: PhotoDto, userId: string) {
    try {
      const user = await this.userService.findById(userId);

      const photo = new PhotoEntity();
      photo.url = photoData.url;
      photo.property.description = photoData.description;
      photo.property.tags = photoData.tags;
      photo.user = user;
      await this.PHOTO.save(photo);
    } catch (err) {
      throw new HttpException(
        'مشکلی از سمت سرور ایجاد شده است',
        HttpStatus.CREATED,
      );
    }
  }
}
