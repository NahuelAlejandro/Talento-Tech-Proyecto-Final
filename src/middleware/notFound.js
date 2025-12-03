import { NotFoundError } from "./errors.js"

export const notFoundRoutes = (req, res, next)=>{
    const notFoundError = new NotFoundError("Not found Route")
    
    next(notFoundError)
}