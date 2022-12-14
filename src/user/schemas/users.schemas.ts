import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class Users {}

export type UsersDocument = HydratedDocument<Users>;
export const UserSchema = SchemaFactory.createForClass(Users);
