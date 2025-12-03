import { ProductServices } from "../services/product.services.js"

export class ProductController {
    static async getAllProducts(req, res, next){
        try {
           const products = await ProductServices.getAllProducts()
           res.json(products)
        } catch (error) {
            next(error)
        }
        
    }
    static async getProduct(req, res, next){
        const {id} = req.params
        try {
            const product = await ProductServices.getProductById(id)
            res.json(product)
        } catch (error) {
            next(error)
        }
        
    }
    static async addProduct(req, res, next){
       const product = req.body
        try {
            const response = await ProductServices.addProduct(product)
            res.json(response)
        } catch (error) {
            next(error)
        }
        
    }
    static async deleteProduct(req, res, next){
        const {id} = req.params
        try {
            const response = await ProductServices.deleteProduct(id)
            res.json(response)
        } catch (error) {
            next(error)
        }
        
    }
}