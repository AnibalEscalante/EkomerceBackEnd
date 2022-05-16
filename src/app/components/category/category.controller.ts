import { Category } from "../../models/category.model";
import repository from "./category.repository";

function getCategorys(): Promise<Category[]>{
  return repository.getCategorys();
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




export default {
  addCategory,
  getCategorys,
  getCategory,
  updateCategory,
  deleteCategory,
  getCategoryName
};
