import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../data/data.js";

export class AuthModel {
    static async login(email){
        const docsRef = collection(db, "users");
        const q = query(docsRef, where("email", "==", email));

        return await getDocs(q);
    }
}