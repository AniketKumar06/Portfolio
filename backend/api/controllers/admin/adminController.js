import adminModels from "../../models/admin/adminModels.js"
export const adminRegister  = async(req,res,next)=>{
    const {name,email,phone,password}= req.body;
    try{
        // Validation all feild
        if((!name) || (!email) || (!phone) || (!password)){
            return res.send({
                success:false,
                msg:"All Feilds are require"
            })
        }
        else{
            console.log(req.body);
        }
    }
    catch(err){
            console.log(err);
    }
}
