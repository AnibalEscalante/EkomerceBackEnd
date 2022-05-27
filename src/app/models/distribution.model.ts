export interface Distribution{
  id: string;
  type: string;
  product: string;
  cost: number;
  amount: number;
  address: string;
  updatedAt?: Date;
  createdAt?: Date;
}