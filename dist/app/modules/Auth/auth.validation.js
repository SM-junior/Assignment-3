"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthValidations = void 0;
const zod_1 = require("zod");
const loginValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string({ required_error: 'email is required.' }),
        password: zod_1.z.string({ required_error: 'Password is required' }),
    }),
});
// const changePasswordValidationSchema = z.object({
//     body: z.object({
//         oldPassword: z.string({
//             required_error: 'Old password is required',
//         }),
//         newPassword: z.string({ required_error: 'Password is required' }),
//     }),
// });
exports.AuthValidations = {
    loginValidationSchema,
    // changePasswordValidationSchema
};
