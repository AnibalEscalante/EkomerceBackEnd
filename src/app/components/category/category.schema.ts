import { Schema, model, Document } from "mongoose";
import { Category } from "../../models/category.model";

const definition: Partial<Record<keyof Category, any>> = {
  name: { type: String, required: true, lowercase: true, trim: true },
  subCategories: [{ type: Schema.Types.ObjectId, ref: 'SubCategory', required: true, autopopulate: true }],
};

const schema: Schema<Category> = new Schema(definition, { timestamps: true });
schema.plugin(require('mongoose-autopopulate'));

export default model<Category & Document>('Category', schema, 'category');
