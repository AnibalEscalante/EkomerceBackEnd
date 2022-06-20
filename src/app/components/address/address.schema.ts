import { Schema, model, Document } from "mongoose";
import { Address } from "../../models/address.model";

const definition: Partial<Record<keyof Address, any>> = {

  region: { type: String, required: true, lowercase: true, trim: true },
  commune: { type: String, required: true, lowercase: true, trim: true },
  street: { type: String, required: true, lowercase: true, trim: true },
  number: { type: String, required: true, lowercase: true, trim: true },
  dept: { type: String, required: false, lowercase: true, trim: true }
  
};

const schema: Schema<Address> = new Schema(definition, { timestamps: true });

export default model<Address & Document>('Address', schema, 'address');
