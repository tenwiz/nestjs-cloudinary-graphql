import { BadRequestException, UploadedFile } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { CloudinaryService } from './cloudinary/cloudinary.service';

@Injectable()
export class AppService {
  constructor(private cloudinary: CloudinaryService) {}

  getHello(): string {
    return 'Hello World!';
  }

  async uploadImageToCloudinary(@UploadedFile() file) {
    return await this.cloudinary.uploadImage(file).catch(() => {
      throw new BadRequestException('Invalid file type.');
    });
  }
}
