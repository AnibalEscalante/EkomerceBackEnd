import { Distribution } from '../../models/distribution.model';
import model from './distribution.schema';

async function getDistributions(): Promise<Distribution[]>{
  return await model.find();
}

async function getDistribution(id: string): Promise<Distribution | null>{
  return await model.findOne({ _id: id });
}

async function addDistribution(distribution: Distribution): Promise<Distribution>{
  return await model.create<Distribution>(distribution);
}

async function updateDistribution(id: string, distribution: Partial<Distribution>): Promise<Distribution | null>{
  return await model.findOneAndUpdate({ _id: id }, distribution);
}

async function deleteDistribution(id: string): Promise<Distribution | null>{
  return await model.findOneAndRemove({_id: id});
}


export default {
  getDistributions,
  getDistribution,
  addDistribution,
  updateDistribution,
  deleteDistribution
};
