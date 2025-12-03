import {Router} from "express"
import { AuthController } from "../controller/auth.js";

export const auth_routes = Router();

auth_routes.post("/login", AuthController.login)