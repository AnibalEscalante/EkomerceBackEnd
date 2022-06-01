import { Product } from "../../models/product.model";
import repository from "./product.repository";

async function getProducts(): Promise<Product[]>{
  return await repository.getProducts();
}

async function getProduct(id: string): Promise<Product | null>{
  return await repository.getProduct(id);
}

async function addProduct(product: Product): Promise<Product>{
  return await repository.addProduct(product);
}

async function updateProduct(id: string, product: Partial<Product>): Promise<Product | null>{
  return await repository.updateProduct(id, product);
}

async function deleteProduct(id: string): Promise<Product | null>{
  return await repository.deleteProduct(id);
}



export default {
  addProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct
};
