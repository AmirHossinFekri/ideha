import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserEntity } from './users/entity/user.entity';
import { AuthModule } from './auth/auth.module';
import { PhotosModule } from './photos/photos.module';
import { PhotoEntity } from './photos/entities/photos.entity';
import { PropertiesModule } from './properties/properties.module';
import { PropertyEntity } from './properties/entity/property.entity';
import { FilesController } from './files/files.controller';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
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

    UsersModule,
    AuthModule,
    PhotosModule,
    PropertiesModule,
  ],
  controllers: [FilesController],
})
export class AppModule {}
