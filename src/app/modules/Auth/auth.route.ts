import express from 'express'
import { validateRequest } from '../../middleware/validateRequest';
import { UserValidation } from '../User/user.validation';
import { AuthControllers } from './auth.controller';

const router = express.Router()
router.post('/signup', AuthControllers.registerUser)
router.post('/login', AuthControllers.loginUser)

export const AuthRoute = router;