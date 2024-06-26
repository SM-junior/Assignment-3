// import { config } from "../../config";
// import { catchAsync } from "../../utils/catchAsync";
// import { AuthServices } from "./auth.services";

import { config } from "../../config";
import { catchAsync } from "../../utils/catchAsync";
import { AuthServices } from "./auth.services";


// const registerUser = catchAsync(async (req, res) => {
//     const result = await AuthServices.register(req.body);
//     res.status(200).json({
//         success: true,
//         message: 'User registered successfully',
//         data: result,
//     });
// });
// const loginUser = catchAsync(async (req, res) => {
//     console.log(req.body);
//     const { accessToken, refreshToken } = await AuthServices.login(req.body);

//     res.cookie('refreshToken', refreshToken, {
//         httpOnly: true,
//         secure: config.node_dev === 'production',
//     });
//     res.status(200).json({
//         success: true,
//         message: 'User logged in successfully',
//         data: {
//             accessToken,
//         },
//     });
// });

// export const AuthControllers = {
//     registerUser,
//     loginUser,
// };


// ______________________________________________________________________________________________________________________
// ______________________________________________________________________________________________________________________

const registerUser = catchAsync(async (req, res) => {
    const result = await AuthServices.registerUser(req.body)
    res.status(200).json({
        success: true,
        message: "User is created successfully",
        data: result,
    })
})

const loginUser = catchAsync(async (req, res) => {
    console.log('req.body:', req.body);
    const { accessToken, refreshToken } = await AuthServices.loginUser(req.body);
    res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: config.node_dev === "production"
    })
    res.status(200).json({
        success: true,
        message: "User login successfully",
        token: accessToken,
    })
})


export const AuthControllers = {
    registerUser,
    loginUser,
};