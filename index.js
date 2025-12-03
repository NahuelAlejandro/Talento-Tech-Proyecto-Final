import express from "express";
import cors from "cors"
import { notFoundRoutes } from "./src/middleware/notFound.js";
import { errorHandler } from "./src/middleware/errorHandler.js";
import { products_routes } from "./src/routes/products.routes.js";
import { PORT } from "./config.js";
import { auth_routes } from "./src/routes/auth.routes.js";

const app = express()

const corsConfig = {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ["Content-Type", "Authorization"],
    exposedHeaders: ["Content-Length"],
    credentials: true,
    maxAge: 600,
    optionsSuccessStatus: 204
}

app.use(express.json())
app.use(cors(corsConfig))
app.get("/", (req, res) => {
  res.send("✨ API Rest Talento Tech Proyecto Final funcionando correctamente ✨");
});
app.use("/auth", auth_routes)
app.use("/api/products", products_routes)
app.use(notFoundRoutes)
app.use(errorHandler)

app.listen(PORT, ()=>{
    console.log(`Server listen in Port: ${PORT}`)
})