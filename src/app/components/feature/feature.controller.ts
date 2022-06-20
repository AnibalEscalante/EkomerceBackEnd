import { Feature } from "../../models/feature.model";
import repository from "./feature.repository";

async function getFeatures(): Promise<Feature[]>{
  return await repository.getFeatures();
}

async function getFeature(id: string): Promise<Feature | null>{
  return await repository.getFeature(id);
}

async function addFeature(feature: Feature): Promise<Feature>{
  return await repository.addFeature(feature);
}

async function updateFeature(id: string, feature: Partial<Feature>): Promise<Feature | null>{
  return await repository.updateFeature(id, feature);
}

async function deleteFeature(id: string): Promise<Feature | null>{
  return await repository.deleteFeature(id);
}



export default {
  addFeature,
  getFeatures,
  getFeature,
  updateFeature,
  deleteFeature
};
