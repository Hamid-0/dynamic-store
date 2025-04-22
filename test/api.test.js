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
