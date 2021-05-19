import { Injectable } from '@nestjs/common';
import { v2 } from 'cloudinary';
import toStream = require('buffer-to-stream');
import { CouldinaryResponse } from 'src/app.model';
import { ReadStream } from 'fs';

@Injectable()
export class CloudinaryService {
  async uploadImage(file: Express.Multer.File): Promise<CouldinaryResponse> {
    return new Promise((resolve, reject) => {
      const upload = v2.uploader.upload_stream((error, result) => {
        if (error) return reject(error);
        resolve(result);
      });
      toStream(file.buffer).pipe(upload);
    });
  }

  async uploadImageFile(file: ReadStream): Promise<CouldinaryResponse> {
    return new Promise((resolve, reject) => {
      const upload = v2.uploader.upload_stream((error, result) => {
        if (error) return reject(error);
        resolve(result);
      });
      file.pipe(upload);
    });
  }
}
