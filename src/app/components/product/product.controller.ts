import { Product } from "../../models/product.model";
import repository from "./product.repository";

async function getProducts(): Promise<Product[]>{
  return await repository.getProducts();
}

async function getSubCatProducts(): Promise<Product[]>{
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

async function getProductName(name:string): Promise<any[] | null>{
  let result: any[] | null = [];
  const products: Product[] | null = await repository.getProducts();
  if (products){
    for(let product of products){
      if(product.brand === name){
        const data:any = {
          id: product.id,
          brand: product.brand,
          products: await repository.getProduct(product.id!)
        };
        result.push(data)
      }
      if(product.description === name){
        const data:any = {
          id: product.id,
          brand: product.brand,
          products: await repository.getProduct(product.id!)
        };
        result.push(data) 
      }
    }
  }
  return result;
}


export default {
  addProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
  getSubCatProducts,
  getProductName
};
