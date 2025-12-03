import { NotFoundError, ProductExistsError } from "../middleware/errors.js";
import { ProductModel } from "../model/product.js";

export class ProductServices {
    static async getAllProducts() {
        const querySnapshot = await ProductModel.getAllProducts()
        const products = [] 
        querySnapshot.forEach((doc) => {
            products.push({ id: doc.id, ...doc.data() }) 
        })
        return products
    }
    static async getProductById(id) {
        const docSnap = await ProductModel.getProductById(id)
        if (docSnap.exists()) {
            return docSnap.data()
        } else {
            throw new NotFoundError("The product has not been found");
        }
    }
    static async addProduct(product) {
         const querySnapshot = await ProductModel.findProductByName(product.name)
   const products = querySnapshot.docs.map(doc=> {
        return {
            id: doc.id,
            ...doc.data()
        }
    })
        if (products.length > 0) {
            throw new ProductExistsError(`This Product ${product.name} already exist`);
        } 
        else {
            const docRef = await ProductModel.addProduct(product)
            return {id: docRef.id}
        }
    }
    static async deleteProduct(id) {
        await ProductModel.deleteProduct(id)
        const docSnap = await ProductModel.getProductById(id)
        if (!docSnap.exists()){
            return {message: "The product has been successfully removed"}
        }
    }
}