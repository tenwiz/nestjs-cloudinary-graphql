import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CouldinaryResponse {
  @Field()
  public_id: string;

  @Field()
  version: number;

  @Field()
  signature: string;

  @Field()
  width: number;

  @Field()
  height: number;

  @Field()
  format: string;

  @Field()
  resource_type: string;

  @Field()
  created_at: string;

  @Field()
  bytes: number;

  @Field()
  etag: string;

  @Field()
  url: string;

  @Field()
  secure_url: string;

  @Field()
  original_filename: string;
}
