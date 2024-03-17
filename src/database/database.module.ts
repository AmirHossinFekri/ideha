import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoEntity } from 'src/photos/entities/photos.entity';
import { PropertyEntity } from 'src/properties/entity/property.entity';
import { UserEntity } from 'src/users/entity/user.entity';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [UserEntity, PhotoEntity, PropertyEntity],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
