import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from '../../base.repository';
import { UsersDocument } from '../schemas/users.schemas';

@Injectable()
export class UsersRepository extends BaseRepository<UsersDocument> {
  constructor(
    @InjectModel('Users')
    private readonly usersModel: Model<UsersDocument>,
  ) {
    super(usersModel);
  }
}
