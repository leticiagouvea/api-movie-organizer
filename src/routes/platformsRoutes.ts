import express from 'express';
import { validatePlatform } from '../middlewares/joiMiddleware.js';
import { createPlatform } from '../controllers/platformsController.js';

const router = express.Router();

router.post('/platforms', validatePlatform, createPlatform);

export default router;