import { Request, Response } from "express"
import config from "../../config"
import { productServices } from "./product.service";


const createProduct=async(req:Request,res:Response)=>{

    try {
        const value=req.body;

        const result= await  productServices.saveProductInDB(value)

        res.status(200).json({
            message:"Product created successfully",
            success: true,
            data:result
        })




        
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch ( error:any) {
        res.status(500).json({
            
            message:error.message || "Something went wrong",
            success: false,
            error: error.details || error.name,
            stack: config.node_env === 'development' ? error.stack : undefined,


        })
    }

}





export const productController={
    createProduct,

}

