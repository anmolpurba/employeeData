import express from "express";
import { connectDatabase } from "./connectDB.js";
import cors from "cors";
import employeeRoutes from "./controller/employeeController.js"
import dotenv from "dotenv";

// Configure dotenv
dotenv.config();

const app = express();
app.use(cors());

// Connect to the database
connectDatabase();

// Middleware to parse JSON requests
app.use(express.json());

app.use('/api', employeeRoutes);

// Define a simple route
app.get("/", (req, res) => {
    res.send("Hello, World!");
});

// Define the port (default to 3000 if not set in .env)
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`);
});
