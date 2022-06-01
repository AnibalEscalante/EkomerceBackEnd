import { Schema, model, Document } from "mongoose";
import { Product } from "../../models/product.model";

const definition: Partial<Record<keyof Product, any>> = {

    code: { type: String, required: true, trim: true },
    brand: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    price: { type: Number, required: true, trim: true },
    image: { type: String, required: false, trim: true },
    discount: { type: String, required: false, trim: true },
    features: [{ type: Schema.Types.ObjectId, ref: 'Feature', required: true, trim: true, autopopulate: true }],

};

const schema: Schema<Product> = new Schema(definition, { timestamps: true });
schema.plugin(require('mongoose-autopopulate'));

export default model<Product & Document>('Product', schema, 'product');
