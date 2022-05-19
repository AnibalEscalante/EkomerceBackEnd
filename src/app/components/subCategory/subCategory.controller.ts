import { SubCategory } from "../../models/subCategory.model";
import repository from "./subCategory.repository";

function getSubCategories(): Promise<SubCategory[]>{
  return repository.getSubCategories();
}

function getSubCategory(id: string): Promise<SubCategory | null>{
  return repository.getSubCategory(id);
}

function addSubCategory(subCategory: SubCategory): Promise<SubCategory>{
  return repository.addSubCategory(subCategory);
}

function updateSubCategory(id: string, subCategory: Partial<SubCategory>): Promise<SubCategory | null>{
  return repository.updateSubCategory(id, subCategory);
}

async function deleteSubCategory(id: string): Promise<SubCategory | null>{
  return repository.deleteSubCategory(id);
}


async function getSubCategoriesName(): Promise<any[] | null>{
  const subCategories: SubCategory[] | null = await repository.getSubCategories();
  let result: any[] | null = [];
  if(subCategories){
    for(let subCategory of subCategories){
      const data = {
        id: subCategory._id,
        name: subCategory.name
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
  getSubCategoriesName
};
