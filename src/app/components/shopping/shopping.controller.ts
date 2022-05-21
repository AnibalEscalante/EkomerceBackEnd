import { Shopping } from "../../models/shopping.model";
import repository from "./shopping.repository";

function getShoppings(): Promise<Shopping[]>{
  return repository.getShoppings();
}

function getShopping(id: string): Promise<Shopping | null>{
  return repository.getShopping(id);
}

function addShopping(shopping: Shopping): Promise<Shopping>{
  return repository.addShopping(shopping);
}

function updateShopping(id: string, shopping: Partial<Shopping>): Promise<Shopping | null>{
  return repository.updateShopping(id, shopping);
}

async function deleteShopping(id: string): Promise<Shopping | null>{
  return repository.deleteShopping(id);
}

export default {
  addShopping,
  getShoppings,
  getShopping,
  updateShopping,
  deleteShopping
};
