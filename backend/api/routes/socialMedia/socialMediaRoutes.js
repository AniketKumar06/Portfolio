import {Router} from 'express';
import { socialMediaUpload } from '../../controllers/socialMedia/socialMediaController.js';

const router  = Router();

/**Action : Upload 
 * METHOD : POST
*/

router.post('/upload',socialMediaUpload);

export default router;