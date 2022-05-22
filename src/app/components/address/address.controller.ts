import { Address } from "../../models/address.model";
import repository from "./address.repository";

function getAddresses(): Promise<Address[]>{
  return repository.getAddresses();
}

function getAddress(id: string): Promise<Address | null>{
  return repository.getAddress(id);
}

function addAddress(address: Address): Promise<Address>{
  return repository.addAddress(address);
}

function updateAddress(id: string, address: Partial<Address>): Promise<Address | null>{
  return repository.updateAddress(id, address);
}

async function deleteAddress(id: string): Promise<Address | null>{
  return repository.deleteAddress(id);
}



export default {
  addAddress,
  getAddresses,
  getAddress,
  updateAddress,
  deleteAddress
};
