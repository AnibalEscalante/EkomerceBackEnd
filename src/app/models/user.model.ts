export interface User {
  _id?: string;
  name: string;
  lastNameP: string;
  lastNameM: string;
  rut: string;
  movilPhone?: string;
  myMethodPayment?: string[]
  myShoppings?: string[];
  myAddress?: string[];
  updateAt?: Date;
  createdAt?: Date;
}