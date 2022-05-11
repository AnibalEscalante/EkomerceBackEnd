import { Schema, model, Document } from "mongoose";
import { Feature } from "../../models/feature.model";

const definition: Partial<Record<keyof Feature, any>> = {
  name: { type: String, required: true, lowercase: true, trim: true },
  attribute: { type: String, required: true, lowercase: true, trim: true }
};

const schema: Schema<Feature> = new Schema(definition, { timestamps: true });

export default model<Feature & Document>('Feature', schema, 'feature');
