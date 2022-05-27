import { Schema, model, Document } from "mongoose";
import { Shopping } from "../../models/shopping.model";

const definition: Partial<Record<keyof Shopping, any>> = {
  total: { type: Number, required: true, trim: true },
  distributions: [{ type: Schema.Types.ObjectId, ref: 'Distribution', required: true, trim: true, autopopulate: true }],
};

const schema: Schema<Shopping> = new Schema(definition, { timestamps: true });
schema.plugin(require('mongoose-autopopulate'));
export default model<Shopping & Document>('Shopping', schema, 'shopping');
