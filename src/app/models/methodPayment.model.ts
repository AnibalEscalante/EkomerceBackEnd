export interface MethodPayment{
  id?: string;
  nameCard: string;
  cardNumber: string;
  amount: number;
  CVCcode: string;
  expirationDate: Date;
  updatedAt?: Date;
  createdAt?: Date;
}