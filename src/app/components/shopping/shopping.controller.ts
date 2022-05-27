import { Shopping } from "../../models/shopping.model";
import repository from "./shopping.repository";

async function getShoppings(): Promise<Shopping[]>{
  return await repository.getShoppings();
}

async function getShopping(id: string): Promise<Shopping | null>{
  return await repository.getShopping(id);
}

async function addShopping(shopping: Shopping): Promise<Shopping>{
  return await repository.addShopping(shopping);
}

async function updateShopping(id: string, shopping: Partial<Shopping>): Promise<Shopping | null>{
  return await repository.updateShopping(id, shopping);
}

async function deleteShopping(id: string): Promise<Shopping | null>{
  return await repository.deleteShopping(id);
}

export default {
  addShopping,
  getShoppings,
  getShopping,
  updateShopping,
  deleteShopping
};
