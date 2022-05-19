import { SubCategory } from '../../models/SubCategory.model';
import model from './subCategory.schema';

async function getSubCategories(): Promise<SubCategory[]>{
  return model.find();
}

async function getSubCategory(id: string): Promise<SubCategory | null>{
  return model.findOne({ _id: id });
}

async function addSubCategory(SubCategory: SubCategory): Promise<SubCategory>{
  return model.create<SubCategory>(SubCategory);
}

async function updateSubCategory(id: string, SubCategory: Partial<SubCategory>): Promise<SubCategory | null>{
  return model.findOneAndUpdate({ _id: id }, SubCategory);
}

async function deleteSubCategory(id: string): Promise<SubCategory | null>{
  return model.findOneAndRemove({_id: id});
}


export default {
  getSubCategories,
  getSubCategory,
  addSubCategory,
  updateSubCategory,
  deleteSubCategory
};
