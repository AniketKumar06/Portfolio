import { Schema ,model} from 'mongoose';

const adminModelsSchema = new Schema({
    name:{
      type:String,
      required:true  
    },
    phone:{
        type:Number,
        required:true,
        unique:true

    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    

}, { timestamps: true });


export default model("adminModels", adminModelsSchema);

