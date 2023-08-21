import admin from '../models/adminModels.js';

export const adminRegisterController = async (req, res, next) => {
    const { name, email, phone, password } = req.body;
    try {

        /** Validation All Entites */
        if (!name && !email && !phone && !password ) {
            return result.status(403).write({ success: false, message: "All Data are required" })
        }
        console.log(name)
        console.log(email)

    } catch (error) {
        console.log("Error in User Register Controller", error);
        return res.status(500).json({
            sucess: false,
            msg: 'Internal Server Error'
        })
    }
};