import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CouldinaryResponse } from './app.model';
import { AppService } from './app.service';
import { GraphQLUpload } from 'apollo-server-express';
import { FileUpload } from 'graphql-upload';

@Resolver()
export class AppResolver {
  constructor(private readonly appService: AppService) {}

  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }

  @Mutation(() => CouldinaryResponse)
  async upload(
    @Args({ name: 'file', type: () => GraphQLUpload, nullable: true })
    file: FileUpload,
  ): Promise<CouldinaryResponse> {
    return this.appService.uploadImageToCloudinary(file);
  }
}
