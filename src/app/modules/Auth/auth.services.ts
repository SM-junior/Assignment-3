// import jwt from 'jsonwebtoken';
// import { config } from '../../config';
// import { TUser } from '../User/user.interface';
// import { UserModel } from '../User/user.model';
// import { isPasswordMatched } from './auth.utils';

import { config } from "../../config";
import { TUser } from "../User/user.interface"
import { UserModel } from "../User/user.model"
import { TLoginUser } from "./auth.interface";
import { isPasswordMatched } from "./auth.utils";
import jwt from 'jsonwebtoken';
import { UserRoll } from "../User/user.constant";

// const register = async (payload: TUser) => {
//     const user = await UserModel.find({ email: payload.email });
//     if (!user) {
//         throw new Error('This user already exits');
//     }
//     payload.role = 'user';

//     const result = await UserModel.create(payload);
//     return result;
// };

// const login = async (payload: TUser) => {
//     const user = await UserModel.findOne({ email: payload.email }).select('+password');

//     if (!user) {
//         throw new Error('user not found');
//     }
//     const passwordMatched = await isPasswordMatched(
//         payload.password,
//         user.password,
//     );
//     if (!passwordMatched) {
//         throw new Error('Password do not matched');
//     }
//     const jwtPayload = {
//         email: user.email,
//         role: user.role,
//     };

//     const accessToken = jwt.sign(jwtPayload, config.jwt_access_token as string, { expiresIn: '3d' },
//     );
//     const refreshToken = jwt.sign(
//         { payload }, '3d',
//         { expiresIn: '30d' },
//     );

//     return {
//         accessToken,
//         refreshToken
//     };
// };

// export const AuthServices = {
//     register,
//     login,
// };

// ______________________________________________________________________________________________________________________
// ______________________________________________________________________________________________________________________

const registerUser = async (payload: TUser) => {
    console.log('payload:', payload);
    //find user by email if the user is already exist in database
    const user = await UserModel.findOne({ email: payload.email });
    if (user) {
        throw new Error('User is already exist')
    };
    const result = await UserModel.create(payload);
    return result
}

const loginUser = async (payload: TLoginUser) => {
    console.log('payload:', payload);
    const user = await UserModel.findOne({ email: payload.email }).select("+password");
    if (!user) {
        throw new Error('Anonymous user')
    }

    if (!await isPasswordMatched(payload.password, user.password)) {
        throw new Error('Invalid password')
    }

    const jwtPayload = {
        email: user.email,
        role: user.role
    }

    const accessToken = jwt.sign(jwtPayload, config.jwt_access_token as string, { expiresIn: '1d' });
    const refreshToken = jwt.sign(jwtPayload, config.jwt_refresh_token as string, { expiresIn: '7d' });

    return {
        accessToken,
        refreshToken
    }
}


export const AuthServices = {
    registerUser,
    loginUser
};