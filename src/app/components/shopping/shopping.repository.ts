import { Shopping } from '../../models/shopping.model';
import model from './shopping.schema';

async function getShoppings(): Promise<Shopping[]>{
  return await model.find();
}

async function getShopping(id: string): Promise<Shopping | null>{
  return await model.findOne({ _id: id });
}

async function addShopping(shopping: Shopping): Promise<Shopping>{
  return await model.create<Shopping>(shopping);
}

async function updateShopping(id: string, shopping: Partial<Shopping>): Promise<Shopping | null>{
  return await model.findOneAndUpdate({ _id: id }, shopping);
}

async function deleteShopping(id: string): Promise<Shopping | null>{
  return await model.findOneAndRemove({_id: id});
}


export default {
  getShoppings,
  getShopping,
  addShopping,
  updateShopping,
  deleteShopping
};
