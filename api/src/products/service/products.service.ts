import { Injectable } from '@nestjs/common';
import { ProductsRepository } from '../repository/products.repository';
import { CreateProductDto } from '../dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly productsRepo: ProductsRepository) {}

  findAll() {
    try {
      return this.productsRepo.findAll();
    } catch (error) {
      console.log(error);
    }
  }

  create(createProductDto: CreateProductDto) {
    try {
      return this.productsRepo.create(createProductDto);
    } catch (error) {
      console.log(error);
    }
  }
}
