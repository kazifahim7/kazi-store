import { Schema, model } from 'mongoose';
import { Product } from './product.interface';

//Create a Schema corresponding to the document interface.
const productSchema = new Schema<Product>(
  {
    name: {
      type: String,
      required: [true, 'Product name is required'],
    },
    brand: {
      type: String,
      required: [true, 'Product brand is required'],
    },
    price: {
      type: Number,
      required: [true, 'Product price is required'],
    },
    category: {
      type: String,
      enum: {
        values: [
          'Writing',
          'Office Supplies',
          'Art Supplies',
          'Educational',
          'Technology',
        ],
        message: '{VALUE} not valid',
      },
    },
    description: {
      type: String,
      required: [true, 'Product description is required'],
    },
    quantity: {
      type: Number,
      required: [true, 'Product quantity is required'],
    },
    inStock: {
      type: Boolean,
      required: [true, 'Product stock status is required'],
    },
  },
  {
    timestamps: true, // it provide me Mongoose will then set createdAt when the document is first inserted, and update updatedAt whenever you update the document using save(), updateOne()
  },
);

//  Create a Model.

export const ProductModel = model<Product>('Product', productSchema);
