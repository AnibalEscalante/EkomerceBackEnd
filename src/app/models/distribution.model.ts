export interface Distribution{
  id?: string;
  type: string;
  cost: number;
  amount: number;
  product: string;
  address: string;
  updatedAt?: Date;
  createdAt?: Date;
}