import { MethodPayment } from "../../models/methodPayment.model";
import repository from "./methodPayment.repository";

async function getMethodsPayment(): Promise<MethodPayment[]>{
  return await repository.getMethodsPayment();
}

async function getMethodPayment(id: string): Promise<MethodPayment | null>{
  return await repository.getMethodPayment(id);
}

async function addMethodPayment(methodPayment: MethodPayment): Promise<MethodPayment>{
  return await repository.addMethodPayment(methodPayment);
}

async function updateMethodPayment(id: string, methodPayment: Partial<MethodPayment>): Promise<MethodPayment | null>{
  return await repository.updateMethodPayment(id, methodPayment);
}

async function deleteMethodPayment(id: string): Promise<MethodPayment | null>{
  return await repository.deleteMethodPayment(id);
}



export default {
  addMethodPayment,
  getMethodsPayment,
  getMethodPayment,
  updateMethodPayment,
  deleteMethodPayment
};
