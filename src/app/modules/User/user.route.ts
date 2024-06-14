import express from 'express';
import { validateRequest } from '../../middleware/validateRequest';
import { UserControllers } from './user.controller';
import { UserValidation } from './user.validation';

const router = express.Router();

router.post(
    '/signup',
    validateRequest(UserValidation.UserValidationSchema),
    UserControllers.createUser

);
router.get('/',
    UserControllers.getAllUsers
);

export const UserRoute = router;