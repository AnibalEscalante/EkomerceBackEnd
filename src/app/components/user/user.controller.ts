import repository from "./user.repository";
import { User } from '../../models/user.model';
import { Auth } from "../../models/auth.model";
import { Address } from "../../models/address.model";
import { Shopping } from "../../models/shopping.model";
import { Distribution } from "../../models/distribution.model";
import authController from "../auth/auth.controller";
import addressController from "../address/address.controller";
import shoppingController from "../shopping/shopping.controller";
import distributionController from "../distribution/distribution.controller";

async function getUsers(): Promise<User[]>{
  return await repository.getUsers();
}

async function getUser(id: string): Promise<any | null>{
  const user: User | null = await repository.getUser(id);
  const auth: Auth | null = await authController.getAuthByAuthenticated(id);
  let result: any | null = null;
  if (user && auth){
    result = {
      id: user.id,
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
    return await repository.addUser(newUser);
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

async function deleteUser(id: string): Promise<User | null>{
  return await repository.deleteUser(id);
}

///////////////////////////////////////////// Address on User /////////////////////////////////////////////

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
  let response: any[] | null = null;
  if (address) {
    user = await getUser(idUser);
    if (user){
      user.myAddress!.push(address.id!);
      response = user.myAddress!
    }
  }
  return response
}

async function removeAddressOnUser(user: User, idAddress: string): Promise<any| null>{
  let response: any | null = null
  if (user.myAddress){
    for (let address of user.myAddress!){
      if (address === idAddress){
        user.myAddress! = user.myAddress!.filter((item)=> item !== idAddress);
        response = address;
      }
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

///////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////// Shopping on User ////////////////////////////////////////////

async function getMyShoppings(id:string): Promise<any[] | null> {
  const user: User | null = await getUser(id);
  let response: any[] | null = null;
  if (user)
    response = user.myShoppings!;
  return response;
}

async function addShoppingOnUser(shopping: Shopping, distributions: Distribution[], idUser: string): Promise<any[] | null> {
  const newShopping: Shopping | null = await shoppingController.addShopping(shopping);
  let response: any[] | null = null;

  if (newShopping){
    for (let distribution of distributions){
      const newDistribution: Distribution | null = await distributionController.addDistribution(distribution);
      if (newDistribution){
        newShopping.distributions.push(newDistribution.id!);
      } else return response;
    }
  } else return response;
  
  let user: User | null = await getUser(idUser);

  if (user){
    user.myShoppings?.push(newShopping.id!);
    response = user.myShoppings!;
  } 
  
  return response;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////// Basket on User /////////////////////////////////////////////

async function getMyBasket(id:string): Promise<any[] | null> {
  const user: User | null = await getUser(id);
  let response: any[] | null = null;
  if (user)
    response = user.myBasket!;
  return response;
}

async function addDistributionOnMyBasket(distribution: Distribution, idUser: string): Promise<any[] | null> {
  const newDistribution: Distribution | null = await distributionController.addDistribution(distribution);
  let user: User | null = null;
  let response: any[] | null = null;

  if (newDistribution){
    user = await getUser(idUser);
    if (user) {
      user.myBasket!.push(newDistribution.id!)
      response = user.myBasket!
    }
  }
  
  return response;
}

async function removeDistributionOnMyBasket(user: User, idDistribution: string): Promise<any| null>{
  let response: any | null = null
  if (user.myBasket){
    for (let distribution of user.myBasket){
      if (distribution === idDistribution){
        user.myBasket = user.myBasket.filter((item)=> item !== idDistribution);
        response = distribution;
      }
    }
  }
  return response;
}

async function deleteDistributionOnMyBasket(idUser: string, idDistribution: string): Promise<Distribution | null>{
  const distributionDeleted: Distribution | null = await distributionController.deleteDistribution(idDistribution);
  if(distributionDeleted){
    const user: User | null = await getUser(idUser);
    if (user) await removeAddressOnUser(user, idDistribution);
  }
  return distributionDeleted;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////

export default {
  getUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
  getMyAddress,
  addAddresOnUser,
  deleteAddressOnUser,
  getMyShoppings,
  addShoppingOnUser,
  getMyBasket,
  addDistributionOnMyBasket,
  removeDistributionOnMyBasket,
  deleteDistributionOnMyBasket
};
