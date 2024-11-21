import { Product } from "./product.interface";
import { ProductModel } from "./product.model";

const saveProductInDB = async(data:Product)=>{
    const result= await ProductModel.create(data)
    return result
}













export const productServices={
    saveProductInDB
}