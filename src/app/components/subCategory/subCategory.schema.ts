import { Schema, model, Document } from "mongoose";
import { SubCategory } from "../../models/subCategory.model";

const definition: Partial<Record<keyof SubCategory, any>> = {
  name: { type: String, required: true, lowercase: true, trim: true },
  products: [{ type: Schema.Types.ObjectId, ref: 'Product', required: true, autopopulate: true }],
};

const schema: Schema<SubCategory> = new Schema(definition, { timestamps: true });
schema.plugin(require('mongoose-autopopulate'));

export default model<SubCategory & Document>('SubCategory', schema, 'subCategory');
