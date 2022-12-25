import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from '../../base.repository';
import { ProductsDocument } from '../schemas/products.schema';

@Injectable()
export class ProductsRepository extends BaseRepository<ProductsDocument> {
  constructor(
    @InjectModel('Products')
    private readonly productsModel: Model<ProductsDocument>,
  ) {
    super(productsModel);
  }
}
