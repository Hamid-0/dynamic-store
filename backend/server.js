import express from "express";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.routes.js"

const app = express();

app.use(express.json()); // allows us to accept JSON data in the req.body

app.use("/api/products", productRoutes)

app.listen(5000, ()=>{
    connectDB();
    console.log("server started at port http://localhost:5000")
})

