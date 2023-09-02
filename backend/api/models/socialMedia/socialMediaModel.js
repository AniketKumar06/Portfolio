import mongoose from 'mongoose';

const socialMediaSchema = new mongoose.Schema({
    title:{
        type: String,
        require:true
    },
    link:{
        type:String,
        require:true
    },
    image:{
        tyoe:String,
        require: true,
        unique:true
    }},
    {
        timestamps: true 
});

export default mongoose.model("socialMedia",socialMediaSchema);