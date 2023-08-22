import { Schema , model, trusted } from "mongoose";

const adminSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required : true,
        unique :true
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
});

export default model("adminModels",adminSchema);