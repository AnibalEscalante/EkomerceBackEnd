import subCategory from ".";
import { SubCategory } from "../../models/subCategory.model";
import categoryController from "../category/category.controller";
import productController from "../product/product.controller";
import repository from "./subCategory.repository";

async function getSubCategories(): Promise<SubCategory[]>{
  return await repository.getSubCategories();
}

async function getSubCategory(id: string): Promise<SubCategory | null>{
  return await repository.getSubCategory(id);
}

async function addSubCategory(subCategory: SubCategory): Promise<SubCategory>{
  return await repository.addSubCategory(subCategory);
}

async function updateSubCategory(id: string, subCategory: Partial<SubCategory>): Promise<SubCategory | null>{
  return await repository.updateSubCategory(id, subCategory);
}

async function deleteSubCategory(id: string): Promise<SubCategory | null>{
  return await repository.deleteSubCategory(id);
}
async function getSubCategoryName(name:string): Promise<any | null>{
  let result: any | null = null;
  const subCategories: SubCategory[] | null = await repository.getSubCategories();
  if (subCategories){
    for(let subCategory of subCategories){
      if(subCategory.name === name){
        result = await product(subCategory.products)
      }
    }
    if(!result){
      result = await productController.getProductName(name)
    }
  }
  return result;
}


async function product(products: string[]): Promise<any | null>{
  let pList: any[] = [];
  let result: any | null = null;
  if(products){
      for(let product of products){
        pList.push(product)
      }
    const data: any = {
      productList: pList
    }
    result = data
  }
  return result
}

async function getSubCatProductName(id: string): Promise<any | null>{
  const subCat: SubCategory | null = await repository.getSubCategory(id);
  const result = {
    products: subCat?.products
  };
  return result;
}

async function getSubCatAllProducts(idSubCategories: string[]): Promise<any[] | null>{
  let result: any[] | null = [];
  for(let subCategory of idSubCategories){
    const subCat = await repository.getSubCategory(subCategory)
    result.push(subCat?.products)
  }
  return result
}

async function getSubCategoriesName(idSubCategories: string[]): Promise<any[] | null>{
  let result: any[] | null = [];
  for(let idSubCategory of idSubCategories){
    const response: SubCategory | null = await repository.getSubCategory(idSubCategory);
    if(response){
      const data = {
        id: response.id,
        name: response.name
      };
      result.push(data)
    }
  }
  return result;
}
export default {
  addSubCategory,
  getSubCategories,
  getSubCategory,
  updateSubCategory,
  deleteSubCategory,
  getSubCategoriesName,
  getSubCategoryName,
  getSubCatProductName,
  getSubCatAllProducts
};
