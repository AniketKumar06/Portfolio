import {createServer } from 'http';
import color from 'colors'
import { config } from 'dotenv';
import app  from './app.js';

// config env file with dotenv 

config({
    path:'./config/config.env'
})



const server = createServer(app);

const PORT  =  process.env.PORT || 5001;

server.listen(PORT,()=>{
    console.log(`Server is under ${process.env.DEV_MODE} and Running on ${PORT}`.blue.underline)

})