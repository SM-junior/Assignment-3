import express from 'express';
import { validateRequest } from '../../middleware/validateRequest';
import { UserControllers } from './user.controller';
import { UserModel } from './user.model';
import { UserValidation } from './user.validation';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { config } from '../../config';
import { auth } from '../../middleware/auth';
import { UserRoll } from './user.constant';

const router = express.Router();

router.post(
    '/create-admin',
    // validateRequest(UserValidation.createAminValidations),
    auth(UserRoll.ADMIN, UserRoll.SUPER_ADMIN),
    UserControllers.createAdmin
);
router.get('/',
    UserControllers.getAllUsers
);

export const UserRoute = router;