import express from 'express';
import { adminLogin } from '../controllers/adminController.js';

const adminRouter = express.Router();

//hit the endpoint to call the F
adminRouter.post('/login', adminLogin);

export default adminRouter;
