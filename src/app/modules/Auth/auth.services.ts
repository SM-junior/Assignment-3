import jwt from 'jsonwebtoken';
import { config } from '../../config';
import { TUser } from '../User/user.interface';
import { UserModel } from '../User/user.model';
import { isPasswordMatched } from './auth.utils';

const register = async (payload: TUser) => {
    const user = await UserModel.find({ email: payload.email });
    if (!user) {
        throw new Error('This user already exits');
    }
    payload.role = 'user';

    const result = await UserModel.create(payload);
    return result;
};

const login = async (payload: TUser) => {
    const user = await UserModel.findOne({ email: payload.email }).select('+password');

    if (!user) {
        throw new Error('user not found');
    }
    const passwordMatched = await isPasswordMatched(
        payload.password,
        user.password,
    );
    if (!passwordMatched) {
        throw new Error('Password do not matched');
    }
    const jwtPayload = {
        email: user.email,
        role: user.role,
    };

    const accessToken = jwt.sign(jwtPayload, config.jwt_access_token as string, { expiresIn: '3d' },
    );
    const refreshToken = jwt.sign(
        { payload }, '3d',
        { expiresIn: '30d' },
    );

    return {
        accessToken,
        refreshToken
    };
};

export const AuthServices = {
    register,
    login,
};