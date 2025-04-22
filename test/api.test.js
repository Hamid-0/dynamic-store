import { connect, connection } from "mongoose";
import request from "supertest";
import app from "../backend/server";
import { config } from "dotenv";

config();
/* Connecting to the database before each test. */
beforeEach(async () => {
    await connect(process.env.MONGO_URI);
});

describe("GET /api/products", () => {
    it("should get all the products", async () => {
        const response = await request(app).get("/api/products");

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty("success", "true");
        expect(Array.isArray(response.body.data)).toBe(true);
        expect(response.body.data.length).toBeGreaterThan(0);

        const product = response.body.data[0];
        expect(product).toHaveProperty("_id");
        expect(product).toHaveProperty("name");
        expect(product).toHaveProperty("price");
        expect(product).toHaveProperty("image");
        expect(product).toHaveProperty("createdAt");
        expect(product).toHaveProperty("updatedAt");
    });
});

/* Closing database connection after each test. */
afterEach(async () => {
    await connection.close();
});


/* Connecting to the database before each test. */
beforeEach(async () => {
    await connect(process.env.MONGO_URI);
});



describe("POST /api/products", () => {
    it("should get all the products", async () => {
        const newProduct = {
            name: "Headphones",
            price: "39.99",
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        const response = await request(app)
            .post("/api/products")
            .send(newProduct)
            .set("Accept","application/json")
        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty("success", true);
        expect(response.body).toHaveProperty("data");
        const product = response.body.data;
        expect(product).toHaveProperty("_id");
        expect(product).toHaveProperty("name");
        expect(product).toHaveProperty("price");
        expect(product).toHaveProperty("image");
        expect(product).toHaveProperty("createdAt");
        expect(product).toHaveProperty("updatedAt");
        expect(product).toHaveProperty("__v", 0);
    });
});


/* Closing database connection after each test. */
afterEach(async () => {
    await connection.close();
});


/* Connecting to the database before each test. */
beforeEach(async () => {
    await connect(process.env.MONGO_URI);
});
describe("DELETE /api/products/:id", () => {
    it("should delete a product and return confirmation", async () => {
        // First, create a product to delete
        const newProduct = {
            name: "DeleteMe",
            price: 19.99,
            image: "example/delete-src"
        };

        const createResponse = await request(app)
            .post("/api/products")
            .send(newProduct)
            .set("Accept", "application/json");

        const productId = createResponse.body.data._id;

        // Now delete the product
        const deleteResponse = await request(app)
            .delete(`/api/products/${productId}`);

        expect(deleteResponse.statusCode).toBe(200);
        expect(deleteResponse.body).toHaveProperty("success", true);
        expect(deleteResponse.body).toHaveProperty("message", "Product deleted");
    });
});
/* Closing database connection after each test. */
afterEach(async () => {
    await connection.close();
});