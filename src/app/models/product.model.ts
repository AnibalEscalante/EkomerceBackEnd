export interface Product{
  id?: string;
  code: string;
  brand: string;
  description: string;
  price: number;
  image: string;
  discount: string;
  features: string[];
  updatedAt?: Date;
  createdAt?: Date;
}