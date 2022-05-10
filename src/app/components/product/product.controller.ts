import { Product } from "../../models/product.model";
import repository from "./product.repository";

function getProducts(): Promise<Product[]>{
  return repository.getProducts();
}

function getProduct(id: string): Promise<Product | null>{
  return repository.getProduct(id);
}

function addProduct(product: Product): Promise<Product>{
  return repository.addProduct(product);
}

function updateProduct(id: string, product: Partial<Product>): Promise<Product | null>{
  return repository.updateProduct(id, product);
}

async function deleteProduct(id: string): Promise<Product | null>{
  return repository.deleteProduct(id);
}



export default {
  addProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct
};
