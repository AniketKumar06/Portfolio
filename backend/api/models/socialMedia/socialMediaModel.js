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
        type:String,
        require: true
    }},
    {
        timestamps: true 
});

export default mongoose.model("socialMedia",socialMediaSchema);