import { Module } from '@nestjs/common';
import { PhotosService } from './photos.service';
import { PhotosController } from './photos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/users/entity/user.entity';
import { PhotoEntity } from './entities/photos.entity';
import { PropertyEntity } from 'src/properties/entity/property.entity';
import { UsersService } from 'src/users/users.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, PhotoEntity, PropertyEntity]),
  ],
  controllers: [PhotosController],
  providers: [PhotosService, UsersService],
})
export class PhotosModule {}
