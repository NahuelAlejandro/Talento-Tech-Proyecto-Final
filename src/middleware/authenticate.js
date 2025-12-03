import { JWT_SECRET_KEY } from "../../config.js";
import { JsonWebTokenErrors } from "./errors.js"
import jwt from "jsonwebtoken";

export const authenticate = (req, res, next) => {
    const token = req.headers["authorization"]

    if (!token) {
        throw new JsonWebTokenErrors("Token has been not provided.")
    }
    try {
        jwt.verify(token.split(" ")[1], JWT_SECRET_KEY)
    } catch (error) {
        if (error.name === 'JsonWebTokenError') {
            throw new JsonWebTokenErrors("token is missing or invalid");
        }
        if (error.name === 'TokenExpiredError') {
            throw new JsonWebTokenErrors('token has been expired')
        }
    }

    next()
}