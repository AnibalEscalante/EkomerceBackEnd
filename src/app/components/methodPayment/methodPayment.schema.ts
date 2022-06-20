import { Schema, model, Document } from "mongoose";
import { MethodPayment } from "../../models/methodPayment.model";

const definition: Partial<Record<keyof MethodPayment, any>> = {

  nameCard: { type: String, required: true, lowercase: true, trim: true },
  cardNumber: { type: String, required: true, lowercase: true, trim: true },
  amount: { type: Number, required: true},
  CVCcode: { type: String, required: true, lowercase: true, trim: true },
  expirationDate: { type: Date, required: true}
  
};

const schema: Schema<MethodPayment> = new Schema(definition, { timestamps: true });

export default model<MethodPayment & Document>('MethodPayment', schema, 'methodPayment');
