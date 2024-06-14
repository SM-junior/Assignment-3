import express from 'express'
import { AuthControllers } from './auth.controller';

const router = express.Router()
router.post('/signup', AuthControllers.registerUser)
router.post('/login', AuthControllers.loginUser)

export const authRouter = router;