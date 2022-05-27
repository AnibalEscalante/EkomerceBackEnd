export interface Auth {
  id?: string;
  email: string;
  authenticated: string;
  password: string;
  token?: string;
  updatedAt?: Date;
  createdAt?: Date;
};