import { Category } from "../../models/category.model";
import subCategoryController from "../subCategory/subCategory.controller";
import repository from "./category.repository";

async function getCategories(): Promise<Category[]>{
  return await repository.getCategories();
}

async function getCategory(id: string): Promise<Category | null>{
  return await repository.getCategory(id);
}

async function addCategory(category: Category): Promise<Category>{
  return repository.addCategory(category);
}

async function updateCategory(id: string, category: Partial<Category>): Promise<Category | null>{
  return await repository.updateCategory(id, category);
}

async function deleteCategory(id: string): Promise<Category | null>{
  return repository.deleteCategory(id);
}


async function getAllProductCategoryName(name: string): Promise<any | null>{
  const categories: Category[] | null = await repository.getCategories();
  let result: any | null =  null;
  if(categories){
    for(let category of categories){
      if(category.name === name){
        const subCatProducts = await subCategoryController.getSubCatAllProducts(category.subCategories)
        result = await subCategoryProduct(subCatProducts)
      }
    }
    if(!result){
      result = await subCategoryController.getSubCategoryName(name)
    }
  }
  return result;
}

async function subCategoryProduct(subCatProducts: any[] | null): Promise<any | null>{
  let pList: any[] = [];
  let result: any | null = null;
  if(subCatProducts){
    for(let subCategory of subCatProducts){
      for(let product of subCategory){
        pList.push(product)
      }
    }
    const data: any = {
      productList: pList
    }
    result = data
  }
  return result
}
async function getCategoryName(id: string): Promise<any | null>{
  const category: Category | null = await repository.getCategory(id);
  const result = {
    id: category?.id,
    name: category?.name
  };
  return result;
}



async function getCategoriesName(): Promise<Category[] | null>{
  const categories: Category[] | null = await repository.getCategories();
  let result: Category[] | null = [];
  for(let category of categories){
    const data: any = {
      id: category.id,
      name: category.name,
      subCategories: await subCategoryController.getSubCategoriesName(category.subCategories)
    }
    result.push(data)
  }
  return result;
}



export default {
  addCategory,
  getCategories,
  getCategory,
  updateCategory,
  deleteCategory,
  getCategoryName,
  getCategoriesName,
  getAllProductCategoryName,
  subCategoryProduct
};
