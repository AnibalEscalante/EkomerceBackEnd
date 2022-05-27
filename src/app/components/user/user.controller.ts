import repository from "./user.repository";
import { User } from '../../models/user.model';
import { Auth } from "../../models/auth.model";
import authController from "../auth/auth.controller";
import { Address } from "../../models/address.model";
import addressController from "../address/address.controller";
import { Shopping } from "../../models/shopping.model";
import shoppingController from "../shopping/shopping.controller";
import { Distribution } from "../../models/distribution.model";
import distributionController from "../distribution/distribution.controller";

function getUsers(): Promise<User[]>{
  return repository.getUsers();
}

async function getUser(id: string): Promise<any | null>{
  const user: User | null = await repository.getUser(id);
  const auth: Auth | null = await authController.getAuthByAuthenticated(id);
  let result: any | null = null;
  if (user && auth){
    result = {
      _id: user._id,
      name: user.name,
      email: auth.email,
      lastNameP: user.lastNameP,
      lastNameM: user.lastNameM,
      rut: user.rut,
      movilPhone: user.movilPhone,
      myMethodPayment: user.myMethodPayment,
      myShopping: user.myShoppings,
      myAddress: user.myAddress     
    };
    return result;
  }
}

async function addUser(newUser: User): Promise<User | null> {
    return repository.addUser(newUser);
}

async function updateUser(id: string, user: Partial<User & Auth>): Promise<any | null> {
  let updatedAuth: Auth | null = null;
  let updatedUser: User | null = null;
  let response: Partial<User & Auth> | null = null;
  
  const updateAuth: Partial<Auth> = {
    email: user.email
  }
  const updateUser: Partial<User> = {
    name: user.name,
    lastNameP: user.lastNameP,
    lastNameM: user.lastNameM,
    rut: user.rut,
    movilPhone: user.movilPhone
  };

  updatedAuth = await authController.updateEmail(id, updateAuth);
  updatedUser = await repository.updateUser(id, updateUser);

  if (updatedUser && updatedAuth) {
    response = {
      name: updatedUser.name,
      lastNameP: updatedUser.lastNameP,
      lastNameM: updatedUser.lastNameM,
      rut: updatedUser.rut,
      movilPhone: updatedUser.movilPhone,
      email: updatedAuth.email
    }
  }
  return response;
}

async function getMyAddress(id:string): Promise<any[] | null> {
  const user: User | null = await getUser(id);
  let response: any[] | null = null;
  if (user)
    response = user.myAddress!;
  return response;
}

async function addAddresOnUser(newAddress: Address, idUser: string): Promise<any[] | null> {
  const address: Address | null = await addressController.addAddress(newAddress);
  let user: User | null = null;
  if (address) {
    user = await getUser(idUser);
    if (user){
      user.myAddress!.push(address._id!);
    }
  }
  return user?.myAddress!
}

async function removeAddressOnUser(user: User, idAddress: string): Promise<any| null>{
  let response: any | null = null
  for (let address of user.myAddress!){
    if (address === idAddress){
      user.myAddress! = user.myAddress!.filter((item)=> item !== idAddress);
      response = address;
    }
  }
  return response;
}


async function deleteAddressOnUser(idUser: string, idAddress: string): Promise<Address | null>{
  const addressDeleted: Address | null = await addressController.deleteAddress(idAddress)
  if(addressDeleted){
    const user: User | null = await getUser(idUser);
    if (user) await removeAddressOnUser(user, idAddress);
  }
  return addressDeleted;
}

async function addShoppingOnUser(shopping: Shopping, distributions: Distribution[], idUser: string): Promise<any[] | null> {
  const newShopping: Shopping | null = await shoppingController.addShopping(shopping);
  let response: any[] | null = null;

  if (newShopping){
    for (let distribution of distributions){
      const newDistribution: Distribution | null = await distributionController.addDistribution(distribution);
      if (newDistribution){
        newShopping.distributions.push(newDistribution.id);
      } else return response;
    }
  } else return response;
  
  let user: User | null = await getUser(idUser);

  if (user){
    user.myShoppings?.push(newShopping.id);
    response = user.myShoppings!;
  } 
  
  return response;
}

async function deleteUser(id: string): Promise<User | null>{
  return repository.deleteUser(id);
}

/*
async function getOnlyUser(id: string): Promise<User | null>{
  return repository.getUser(id);
}

async function removeRequestC(idUserSender: string, idRequest: string): Promise<User | null>{
  let user = await repository.removeRequest(idUserSender,idRequest);
  return user
}
async function removeRequestCReply(idUserSender: string, idRequestReply: string): Promise<User | null>{
  let user = await repository.removeRequestReply(idUserSender,idRequestReply);
  return user
}

async function removeSavedProject(idUser: string, idProject: string) {
  return repository.removeSavedProject(idUser, idProject);
}

async function removeCollaboratingProject(idUser: string, idProject: string) {
  return repository.removeCollaboratingProject(idUser, idProject);
}

async function removeContactInUsers(id: string) {
  const users = await repository.getUsers();
  for (let user of users) {
    await repository.removeContact(user._id!, id);
  }
  return;
}

async function removeContactInUser(idUser: string, idContact: string) {
  await repository.removeContact(idUser, idContact);
  return;
}
*/

export default {
  getUsers,
  getUser,
  addUser,
  updateUser,
  addAddresOnUser,
  deleteAddressOnUser,
  getMyAddress,
  addShoppingOnUser,
  deleteUser
};
