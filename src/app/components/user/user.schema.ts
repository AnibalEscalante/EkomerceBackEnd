import { Schema, model, Document } from "mongoose";
import { User } from "../../models/user.model";

const definition: Partial<Record<keyof User, any>> = {
  
  name: { type: String, required: true, trim: true },
  lastNameM: { type: String, required: true, trim: true },
  lastNameP: { type: String, required: true, trim: true },
  movilPhone: { type: String, trim: true },
  rut: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },

};

const schema: Schema<User> = new Schema(definition, { timestamps: true });
schema.plugin(require('mongoose-autopopulate'));

export default model<User & Document>('User', schema, 'user');
