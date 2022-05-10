import { Feature } from "../../models/feature.model";
import repository from "./feature.repository";

function getFeatures(): Promise<Feature[]>{
  return repository.getFeatures();
}

function getFeature(id: string): Promise<Feature | null>{
  return repository.getFeature(id);
}

function addFeature(feature: Feature): Promise<Feature>{
  return repository.addFeature(feature);
}

function updateFeature(id: string, feature: Partial<Feature>): Promise<Feature | null>{
  return repository.updateFeature(id, feature);
}

async function deleteFeature(id: string): Promise<Feature | null>{
  return repository.deleteFeature(id);
}



export default {
  addFeature,
  getFeatures,
  getFeature,
  updateFeature,
  deleteFeature
};
