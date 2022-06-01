import { Feature } from '../../models/feature.model';
import model from './feature.schema';

async function getFeatures(): Promise<Feature[]>{
  return await model.find();
}

async function getFeature(id: string): Promise<Feature | null>{
  return await model.findOne({ _id: id });
}

async function addFeature(feature: Feature): Promise<Feature>{
  return await model.create<Feature>(feature);
}

async function updateFeature(id: string, feature: Partial<Feature>): Promise<Feature | null>{
  return await model.findOneAndUpdate({ _id: id }, feature);
}

async function deleteFeature(id: string): Promise<Feature | null>{
  return await model.findOneAndRemove({_id: id});
}


export default {
  getFeatures,
  getFeature,
  addFeature,
  updateFeature,
  deleteFeature
};
