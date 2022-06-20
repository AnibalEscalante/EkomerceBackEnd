import { Address } from "../../models/address.model";
import repository from "./address.repository";

async function getAddresses(): Promise<Address[]>{
  return await repository.getAddresses();
}

async function getAddress(id: string): Promise<Address | null>{
  return await repository.getAddress(id);
}

async function addAddress(address: Address): Promise<Address | null>{
  return await repository.addAddress(address);
}

async function updateAddress(id: string, address: Partial<Address>): Promise<Address | null>{
  return await repository.updateAddress(id, address);
}

async function deleteAddress(id: string): Promise<Address | null>{
  return await repository.deleteAddress(id);
}



export default {
  addAddress,
  getAddresses,
  getAddress,
  updateAddress,
  deleteAddress
};
