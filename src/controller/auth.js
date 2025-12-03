import { AuthServices } from "../services/auth.services.js"

export class AuthController {
    static async login(req, res, next){
        const {email, password} = req.body
        try {
            const response = await AuthServices.login(email, password)
            res.json(response)
        } catch (error) {
            next(error)
        }
    }
}