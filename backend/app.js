import { Router } from "express";
import client from "./config/database/connection.js";
const app  = Router();


client();
export default app;