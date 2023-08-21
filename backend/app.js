import { Router } from "express";
import connectDB from "./config/database/connection.js";
const app  = Router();



connectDB(); 
export default app;
