import { Distribution } from "../../models/distribution.model";
import repository from "./distribution.repository";

function getDistributions(): Promise<Distribution[]>{
  return repository.getDistributions();
}

function getDistribution(id: string): Promise<Distribution | null>{
  return repository.getDistribution(id);
}

function addDistribution(distribution: Distribution): Promise<Distribution>{
  return repository.addDistribution(distribution);
}

function updateDistribution(id: string, distribution: Partial<Distribution>): Promise<Distribution | null>{
  return repository.updateDistribution(id, distribution);
}

async function deleteDistribution(id: string): Promise<Distribution | null>{
  return repository.deleteDistribution(id);
}



export default {
  addDistribution,
  getDistributions,
  getDistribution,
  updateDistribution,
  deleteDistribution
};
