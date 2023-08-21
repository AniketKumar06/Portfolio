import { Router } from "express";
import connectDB from "./config/connection.js";
const app  = Router();


connectDB();
export default app;