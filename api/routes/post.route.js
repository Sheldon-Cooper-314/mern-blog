import express from 'express';
import verifyUser, { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/create', verifyToken, create);

export default router;
