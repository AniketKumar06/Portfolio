
import adminModels from "../../models/admin/adminModels.js";

export const adminRegister = async ( req , res, next)=> {
    const { name, email, phone, password } = req.body;
    try {
        if (!name) {
            return res.status(500).json({
                sucess: false,
                msg: "Name is Required"
            });
        }
        if (!email) {
            return res.status(500).json({
                sucess: false,
                msg: "Email is Required"
            });
        }
        if (!phone) {
            return res.status(500).json({
                sucess: false,
                msg: "Phone is Required"
            });
        }
        if (!password) {
            return res.status(500).json({
                sucess: false,
                msg: "Password is Required"
            });
        }

        // check wheather user exist or not
        const exit = await adminModels.findOne({
            email: email
        });

        if (exit) {
            return res.status(202).json({
                success: true,
                msg: " Already Admin Exist!!"
            });
        }


        let newAdmin = await adminModels.create(req.body);
        res.status(statusCode()).json({
            success: true,
            message: 'Admin Register successfully',
            student: newAdmin
        });
    }

    catch (err) {
        console.log(err);
        next(err);
    }
}


export const adminFetch = async ( req , res, next)=> {
    try{


    }
    catch (err) {
        console.log(err);
        next(err);
    }
}