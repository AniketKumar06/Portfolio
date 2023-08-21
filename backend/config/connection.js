'use strict'

import { connect } from 'mongoose';

const connectDB = async ()=> {
    try {
        const conn = await connect(`mongodb+srv://admin:admin123@portfolio.4ucawcx.mongodb.net/?retryWrites=true&w=majority`);
        console.log(`Database is connected to host : ${conn.connection.host}`.yellow.underline.bold)
    } catch (error) {
        console.log("Database is not connected!!".red.underline.bold);
    }
}

export default connectDB;
