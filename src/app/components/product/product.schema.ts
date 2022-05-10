import { Schema, model, Document } from "mongoose";
import { Product } from "../../models/product.model";

const definition: Partial<Record<keyof Product, any>> = {
    brand: { type: String, required: true, trim: true },
    code: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    image: { type: String, required: false, trim: true },

};

const schema: Schema<Product> = new Schema(definition, { timestamps: true });

export default model<Product & Document>('Product', schema, 'product');
