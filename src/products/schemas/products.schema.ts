import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class Products {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  imgURL: string;
}

export type ProductsDocument = HydratedDocument<Products>;
export const ProductsSchema = SchemaFactory.createForClass(Products);
