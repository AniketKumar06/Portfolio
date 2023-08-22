import { Router } from "express";
import { adminRegister } from "../../controllers/admin/adminController.js";


const router = Router();


router.post('/register',adminRegister)

export default router;