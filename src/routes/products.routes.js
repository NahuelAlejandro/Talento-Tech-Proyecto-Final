import { Router } from "express";
import { ProductController } from "../controller/product.js";
import { authenticate } from "../middleware/authenticate.js";

export const products_routes = Router()

products_routes.get("/", ProductController.getAllProducts);
products_routes.get("/:id", ProductController.getProduct);
products_routes.post("/create", authenticate, ProductController.addProduct);
products_routes.delete("/:id", authenticate, ProductController.deleteProduct);