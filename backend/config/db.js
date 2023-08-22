'use strict'

import { connect } from 'mongoose';
import { config } from 'dotenv';
import  color  from 'colors';
import path from 'path';

config({
    path : path.resolve('../.env')
})
console.log(process.env.MONGO);
console.log(process.env.PORT);


const connectDB = async()=> {
    try {
        const conn = await connect(`${process.env.MONGO}`);
        console.log(`Database is connected to host : ${conn.connection.host}`.yellow.underline.bold)
    } catch (error) {
        console.log("Database is not connected!!".red.underline.bold);
    }
}

export default connectDB;
