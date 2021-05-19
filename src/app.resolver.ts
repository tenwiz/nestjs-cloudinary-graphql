import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CouldinaryResponse } from './app.model';
import { FileUpload } from 'graphql-upload';
import { CloudinaryService } from './cloudinary/cloudinary.service';
import { GraphQLUpload } from 'apollo-server-express';

@Resolver()
export class AppResolver {
  constructor(private readonly cloudinaryService: CloudinaryService) {}

  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }

  @Mutation(() => CouldinaryResponse)
  async upload(
    @Args({ name: 'file', type: () => GraphQLUpload, nullable: true })
    file: FileUpload,
  ): Promise<CouldinaryResponse> {
    const stream = file.createReadStream();
    return this.cloudinaryService.uploadImageFile(stream);
  }
}
