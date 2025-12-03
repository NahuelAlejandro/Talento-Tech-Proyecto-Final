import jwt from "jsonwebtoken";
import { AuthValidationError } from "../middleware/errors.js";
import { AuthModel } from "../model/auth.js"
import { JWT_SECRET_KEY } from "../../config.js";

export class AuthServices {
    static async login(email, password){
        const querySnapshot = await AuthModel.login(email)
           const user = querySnapshot.docs.map(doc=> {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            })
            if(!user.length > 0){
                throw new AuthValidationError("Email is invalid.", 401);   
            }
            if(!user.password === password){
                throw new AuthValidationError("password is invalid.", 401);   
            }
            const token = jwt.sign({id:user.id, email: user.email}, JWT_SECRET_KEY, {expiresIn: "1h"})

            return {
                token: token
            }
    }
}