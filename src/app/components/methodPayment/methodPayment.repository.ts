import { MethodPayment } from '../../models/methodPayment.model';
import model from './methodPayment.schema';

async function getMethodsPayment(): Promise<MethodPayment[]>{
  return await model.find();
}

async function getMethodPayment(id: string): Promise<MethodPayment | null>{
  return await model.findOne({ _id: id });
}

async function addMethodPayment(methodPayment: MethodPayment): Promise<MethodPayment>{
  return await model.create<MethodPayment>(methodPayment);
}

async function updateMethodPayment(id: string, methodPayment: Partial<MethodPayment>): Promise<MethodPayment | null>{
  return await model.findOneAndUpdate({ _id: id }, methodPayment);
}

async function deleteMethodPayment(id: string): Promise<MethodPayment | null>{
  return await model.findOneAndRemove({_id: id});
}


export default {
  getMethodsPayment,
  getMethodPayment,
  addMethodPayment,
  updateMethodPayment,
  deleteMethodPayment
};
