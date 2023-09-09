import express from 'express';
import morgan from 'morgan';

import connectDB from './config/database/db.js';

import adminRoutes from './api/routes/admin/adminRoutes.js';

import socialMediaRoutes  from './api/routes/socialMedia/socialMediaRoutes.js';

/**Creating app */
const app = express();

/**Using Morgan for Method View */
app.use(morgan('dev'));

/**Creating  middleware */
app.use(express.json({}));
app.use(express.json({
    extended: false
}));




/**Linking Database!! */
connectDB();


/** creating api using middleware*/

/**Action : Admin */
app.use('/api/v1/auth', adminRoutes);

/**Action : Social Media */
app.use('/api/v1/auth',socialMediaRoutes);


/**
 * Error Handling While Enter Wrong URL 
 */

app.use('', async (req, res, next) => {

        success: false,
        error: "Bad Respone Enter Url is Wrong!! Please Check!!"
    });
});

export default app;