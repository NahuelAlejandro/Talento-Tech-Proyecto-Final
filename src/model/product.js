import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../data/data.js";

export class ProductModel {
    static async getAllProducts() {
        return await getDocs(collection(db, "products"));
    }
    static async getProductById(id) {
        const docRef = doc(db, "products", id);
        return await getDoc(docRef);
    }
    static async addProduct(product) {
        return await addDoc(collection(db, "products"), product)
    }
    static async deleteProduct(id) {
        await deleteDoc(doc(db, "products", id));
    }
    static async findProductByName(name) {
        const docsRef = collection(db, "products");

        const q = query(docsRef, where("name", "==", name));
        return await getDocs(q);
    }
}