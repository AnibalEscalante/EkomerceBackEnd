import { Distribution } from "../../models/distribution.model";
import repository from "./distribution.repository";

async function getDistributions(): Promise<Distribution[]>{
  return await repository.getDistributions();
}

async function getDistribution(id: string): Promise<Distribution | null>{
  return await repository.getDistribution(id);
}

async function addDistribution(distribution: Distribution): Promise<Distribution>{
  return await repository.addDistribution(distribution);
}

async function updateDistribution(id: string, distribution: Partial<Distribution>): Promise<Distribution | null>{
  return await repository.updateDistribution(id, distribution);
}

async function deleteDistribution(id: string): Promise<Distribution | null>{
  return await repository.deleteDistribution(id);
}



export default {
  addDistribution,
  getDistributions,
  getDistribution,
  updateDistribution,
  deleteDistribution
};
