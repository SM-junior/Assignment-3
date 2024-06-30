import { catchAsync } from '../../utils/catchAsync';
import { UserServices } from './user.services';

const createAdmin = catchAsync(async (req, res) => {
    console.log(req.body);
    const result = await UserServices.createAdminIntoDb(req.body);
    res.status(200).json({
        success: true,
        massage: "Admin is created successfully",
        data: result,
    });
});

const getAllUsers = catchAsync(async (req, res) => {
    const result = await UserServices.getAllUserFromDb(req.query);
    res.status(200).json({
        success: true,
        massage: "User all successfully",
        data: result,
    });
});

export const UserControllers = {
    createAdmin,
    getAllUsers,
};