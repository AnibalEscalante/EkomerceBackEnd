import { Distribution } from '../../models/distribution.model';
import model from './distribution.schema';

async function getDistributions(): Promise<Distribution[]>{
  return model.find();
}

async function getDistribution(id: string): Promise<Distribution | null>{
  return model.findOne({ _id: id });
}

async function addDistribution(distribution: Distribution): Promise<Distribution>{
  return model.create<Distribution>(distribution);
}

async function updateDistribution(id: string, distribution: Partial<Distribution>): Promise<Distribution | null>{
  return model.findOneAndUpdate({ _id: id }, distribution);
}

async function deleteDistribution(id: string): Promise<Distribution | null>{
  return model.findOneAndRemove({_id: id});
}


export default {
  getDistributions,
  getDistribution,
  addDistribution,
  updateDistribution,
  deleteDistribution
};
