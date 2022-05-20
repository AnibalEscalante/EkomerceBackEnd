import repository from "./user.repository";
import { User } from '../../models/user.model';
import { Auth } from "../../models/auth.model";
import authController from "../auth/auth.controller";

function getUsers(): Promise<User[]>{
  return repository.getUsers();
}

async function getUser(id: string): Promise<any | null>{
  const user: User | null = await repository.getUser(id);
  const auth: Auth | null = await authController.getAuthByAuthenticated(id);
  const result = {
    _id: user?._id,
    name: user?.name,
    lastNameP: user?.lastNameP,
    lastNameM: user?.lastNameM,
    movilPhone: user?.movilPhone
  };
  return result;
}

async function addUser(newUser: User): Promise<User | null> {
    return repository.addUser(newUser);
}

async function getOnlyUser(id: string): Promise<User | null>{
  return repository.getUser(id);
}

async function removeRequestC(idUserSender: string, idRequest: string): Promise<User | null>{
  let user = await repository.removeRequest(idUserSender,idRequest);
  return user
}
async function removeRequestCReply(idUserSender: string, idRequestReply: string): Promise<User | null>{
  let user = await repository.removeRequestReply(idUserSender,idRequestReply);
  return user
}

async function removeSavedProject(idUser: string, idProject: string) {
  return repository.removeSavedProject(idUser, idProject);
}

async function removeCollaboratingProject(idUser: string, idProject: string) {
  return repository.removeCollaboratingProject(idUser, idProject);
}

async function removeContactInUsers(id: string) {
  const users = await repository.getUsers();
  for (let user of users) {
    await repository.removeContact(user._id!, id);
  }
  return;
}

async function removeContactInUser(idUser: string, idContact: string) {
  await repository.removeContact(idUser, idContact);
  return;
}


export default {
  getUsers,
  getUser,
  addUser,
  getOnlyUser,
  removeSavedProject,
  removeCollaboratingProject,
  removeContactInUsers,
  removeContactInUser,
  removeRequestC,
  removeRequestCReply,
};
