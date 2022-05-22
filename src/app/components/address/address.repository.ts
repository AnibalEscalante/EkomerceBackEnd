import { Address } from '../../models/address.model';
import model from './address.schema';

async function getAddresses(): Promise<Address[]>{
  return model.find();
}

async function getAddress(id: string): Promise<Address | null>{
  return model.findOne({ _id: id });
}

async function addAddress(address: Address): Promise<Address>{
  return model.create<Address>(address);
}

async function updateAddress(id: string, address: Partial<Address>): Promise<Address | null>{
  return model.findOneAndUpdate({ _id: id }, address);
}

async function deleteAddress(id: string): Promise<Address | null>{
  return model.findOneAndRemove({_id: id});
}


export default {
  getAddresses,
  getAddress,
  addAddress,
  updateAddress,
  deleteAddress
};
