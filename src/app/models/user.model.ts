export interface User {
  id?: string;
  name: string;
  lastNameP: string;
  lastNameM: string;
  rut: string;
  movilPhone?: string;
  myMethodPayment?: string[]
  myShoppings?: string[];
  myAddress?: string[];
  myBasket?: string[];
  updateAt?: Date;
  createdAt?: Date;
}