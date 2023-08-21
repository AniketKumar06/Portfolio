import { Router } from "express";
import connectDB from "./config/database/connection.js";
import adminRoute from './api/routes/adminRoute.js'
const app  = Router();


app.use('api/v1/auth',adminRoute);

connectDB(); 
export default app;
