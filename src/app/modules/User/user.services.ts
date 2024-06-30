import { TUser } from './user.interface';
import { UserModel } from './user.model';

const createAdminIntoDb = async (payload: any) => {
    console.log(payload);
    const admin = await UserModel.create(payload);
    return admin;
};

const getAllUserFromDb = async (payload: Record<string, unknown>) => {
    const result = await UserModel.find(payload);
    return result;
};

export const UserServices = {
    createAdminIntoDb,
    getAllUserFromDb,
};