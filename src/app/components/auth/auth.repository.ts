import { Auth } from '../../models/auth.model';
import model from './auth.schema';

async function addAuth(auth: Auth): Promise<Auth>{
  return await model.create(auth as Auth);
}

async function getAuthByEmail(email: string): Promise<Auth | null>{
  return await model.findOne({ email: email })
    .populate('authenticated')
}

async function getAuthByAuthenticated(authenticated: string): Promise<Auth | null>{
  return await model.findOne({ authenticated });
}

async function updateEmail(id: string, user: Partial<Auth>): Promise<Auth | null>{
  return await model.findOneAndUpdate({ authenticated: id }, { email: user.email });
}

async function changePassword(id: string, newPassword: string){
  return await model.findOneAndUpdate({ authenticated: id }, { password: newPassword });
}

async function deleteAuth(id: string){
  return await model.findOneAndRemove({ authenticated: id });
}

export default {
  addAuth,
  getAuthByEmail,
  getAuthByAuthenticated,
  updateEmail,
  changePassword,
  deleteAuth
};
