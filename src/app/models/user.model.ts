export interface User {
  _id?: string;
  name: string;
  lastNameP: string;
  lastNameM: string;
  rut: string;
  movilPhone?: string;
  myMethodPayment?: string[]
  myShopping?: string[];
  myAddress?: string[];
  updateAt?: Date;
  createdAt?: Date;
}