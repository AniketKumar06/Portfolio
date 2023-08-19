import { connect } from "mongoose";
import { config } from 'dotenv';

config({
    path :'../../config/config.env'
})

const connectDB = async () => {
    try {
        const conn = await connect(process.env.MONGO_URL);
        console.log(`Database is connected to host : ${conn.connection.host}`.green.underline.bold)
    } catch (error) {
        console.log("Database is not connected!!".red.underline.bold);
    }
}

export default connectDB;