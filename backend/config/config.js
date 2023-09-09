import dotenv from 'dotenv';

dotenv.config();

const MONGO_URL = process.env.MONGO_URL || "mongodb+srv://admin:admin123@portfolio.4ucawcx.mongodb.net/?retryWrites=true&w=majority";

export default MONGO_URL;