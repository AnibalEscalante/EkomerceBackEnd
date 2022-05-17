import { Category } from "../../models/category.model";
import repository from "./category.repository";

function getCategories(): Promise<Category[]>{
  return repository.getCategories();
}

function getCategory(id: string): Promise<Category | null>{
  return repository.getCategory(id);
}

function addCategory(category: Category): Promise<Category>{
  return repository.addCategory(category);
}

function updateCategory(id: string, category: Partial<Category>): Promise<Category | null>{
  return repository.updateCategory(id, category);
}

async function deleteCategory(id: string): Promise<Category | null>{
  return repository.deleteCategory(id);
}

async function getCategoryName(id: string): Promise<any | null>{
  const category: Category | null = await repository.getCategory(id);
  const result = {
    id: category?._id,
    name: category?.name
  };
  return result;
}

async function getCategoriesName(): Promise<Category[] | null>{
  const categories: Category[] | null = await repository.getCategories();
  let data: any;
  let result: Category[] | null;
  for(let category of categories){
    data = {
      id: category._id,
      name: category.name
    }
    result!.push(data)
  }
  return result!;
}



export default {
  addCategory,
  getCategories,
  getCategory,
  updateCategory,
  deleteCategory,
  getCategoryName,
  getCategoriesName
};
