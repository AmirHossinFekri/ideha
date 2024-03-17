import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { PhotosService } from './photos.service';
import { AuthGuard } from '@nestjs/passport';
import { PhotoDto } from './dto/photo.dto';
import { Request } from 'express';

@UseGuards(AuthGuard('jwt'))
@Controller('photos')
export class PhotosController {
  constructor(private readonly photosService: PhotosService) {}

  @Post('/')
  storeIdea(@Body() photoData: PhotoDto, @Req() req: Request) {
    this.photosService.storeIdeha(photoData, req.user['id']);
  }
}
