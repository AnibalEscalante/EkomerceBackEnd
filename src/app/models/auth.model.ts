export interface Auth {
  _id?: string;
  email: string;
  authenticated: string;
  password: string;
  token?: string;
  updatedAt?: Date;
  createdAt?: Date;
};