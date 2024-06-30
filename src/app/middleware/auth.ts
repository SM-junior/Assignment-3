import { catchAsync } from "../utils/catchAsync";
import { NextFunction, Request, Response } from 'express';
import { UserRoll } from "../modules/User/user.constant";
import jwt, { JwtPayload } from 'jsonwebtoken';
import { config } from "../config";
import { UserModel } from "../modules/User/user.model";

export const auth = (...requiredRoles: (keyof typeof UserRoll)[]) => {
    return catchAsync(async (req: Request, res: Response, next: NextFunction) => {

        const token = req.headers.authorization;
        if (!token) {
            throw new Error('token is not found')
        };

        const verifiedToken = jwt.verify(token as string, config.jwt_access_token as string);
        const { role, email } = verifiedToken as JwtPayload;
        const user = await UserModel.findOne({ email });

        if (!user) {
            throw new Error('user is not found')
        };
        if (!requiredRoles.includes(user.role)) {
            throw new Error('role is not found')
        };
        next()
    })
}