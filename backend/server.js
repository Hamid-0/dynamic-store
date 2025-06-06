import express from "express";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.routes.js";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

dotenv.config();

const app = express();
// Enable CORS for all origins
app.use(cors({origin:"*"}));

const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();
app.use(express.json()); // allows us to accept JSON data in the req.body

app.use("/api/products", productRoutes);
if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));
	app.get(/(.*)/, (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}

app.listen(PORT, () => {
    connectDB();
    console.log(`server started at port http://localhost:${PORT}`);
});

export default app;
