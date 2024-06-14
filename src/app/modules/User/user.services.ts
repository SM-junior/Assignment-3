import { TUser } from './user.interface';
import { UserModel } from './user.model';

const createUserIntoDb = async (payload: TUser) => {
    console.log(payload);
    const result = await UserModel.create(payload);
    return result;
};

const getAllUserFromDb = async (payload: Record<string, unknown>) => {
    const result = await UserModel.find(payload);
    return result;
};

export const UserServices = {
    createUserIntoDb,
    getAllUserFromDb,
};