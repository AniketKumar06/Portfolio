import { Schema , model, trusted } from "mongoose";

const adminSchema = new Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require : true,
        unique :true
    },
    phone:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    }
});

export default model("adminModels",adminSchema);