import { Product } from '../../models/product.model';
import model from './product.schema';

async function getProducts(): Promise<Product[]>{
  return await model.find();
}

async function getProduct(id: string): Promise<Product | null>{
  return await model.findOne({ _id: id });
}

async function addProduct(product: Product): Promise<Product>{
  return await model.create<Product>(product);
}

async function updateProduct(id: string, product: Partial<Product>): Promise<Product | null>{
  return await model.findOneAndUpdate({ _id: id }, product);
}

async function deleteProduct(id: string): Promise<Product | null>{
  return await model.findOneAndRemove({_id: id});
}

export default {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct
};
