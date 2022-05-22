import { Schema, model, Document } from "mongoose";
import { Distribution } from "../../models/distribution.model";

const definition: Partial<Record<keyof Distribution, any>> = {
  type: { type: String, required: true, lowercase: true, trim: true },
  product: [{ type: Schema.Types.ObjectId, ref: 'Product', required: true, trim: true, autopopulate: true }],
  address: [{ type: Schema.Types.ObjectId, ref: 'Address', required: true, trim: true, autopopulate: true }]
};

const schema: Schema<Distribution> = new Schema(definition, { timestamps: true });

export default model<Distribution & Document>('Distribution', schema, 'distribution');
