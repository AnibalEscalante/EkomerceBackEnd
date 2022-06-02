import { Schema, model, Document } from "mongoose";
import { User } from "../../models/user.model";

const definition: Partial<Record<keyof User, any>> = {
  
  name: { type: String, required: true, trim: true },
  lastNameM: { type: String, required: true, trim: true },
  lastNameP: { type: String, required: true, trim: true },
  rut: { type: String, required: true, trim: true },
  movilPhone: { type: String, trim: true },
  myMethodPayment: [{ type: Schema.Types.ObjectId, ref: 'MethodPayment', autopopulate: true }],
  myShoppings: [{ type: Schema.Types.ObjectId, ref: 'Shopping', autopopulate: true }],
  myAddress: [{ type: Schema.Types.ObjectId, ref: 'Address', autopopulate: true }],
  myBasket: [{ type: Schema.Types.ObjectId, ref: 'Product', autopopulate: true }]

};

const schema: Schema<User> = new Schema(definition, { timestamps: true });
schema.plugin(require('mongoose-autopopulate'));

export default model<User & Document>('User', schema, 'user');
