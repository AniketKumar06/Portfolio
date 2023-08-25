import express from 'express';
import adminModels from "../../models/admin/adminModels.js";

export const adminRegister = async ( request , response, next)=> {
    const { name, email, phone, password } = request.body;
    try {
        if (!name) {
            return response.status(500).json({
                sucess: false,
                msg: "Name is Required"
            });
        }
        if (!email) {
            return response.status(500).json({
                sucess: false,
                msg: "Email is Required"
            });
        }
        if (!phone) {
            return response.status(500).json({
                sucess: false,
                msg: "Phone is Required"
            });
        }
        if (!password) {
            return response.status(500).json({
                sucess: false,
                msg: "Password is Required"
            });
        }

        // check wheather user exist or not
        const exit = await adminModels.findOne({
            email: email
        });

        if (exit) {
            return response.status(202).json({
                success: "User already Exit",
                msg: exit
            });
        }


        let newAdmin = await adminModels.create(req.body);
        res.json({
            success: true,
            message: 'Admin Register successfully',
            student: newAdmin
        });
    }

    catch (err) {
        console.log(err);
    }
}


