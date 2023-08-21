
import { Router } from 'express';
import { adminRegisterController } from '../controllers/adminController.js';


// Creating routes

const router = Router();

/**Action :REGISTER
 * METHOD: POST
 */

router.post('/register', adminRegisterController)

export default router;