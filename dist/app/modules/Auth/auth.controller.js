"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthControllers = void 0;
const config_1 = require("../../config");
const catchAsync_1 = require("../../utils/catchAsync");
const auth_services_1 = require("./auth.services");
const registerUser = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield auth_services_1.AuthServices.register(req.body);
    res.status(200).json({
        success: true,
        message: 'User registered successfully',
        data: result,
    });
}));
const loginUser = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const { accessToken, refreshToken } = yield auth_services_1.AuthServices.login(req.body);
    res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: config_1.config.node_dev === 'production',
    });
    res.status(200).json({
        success: true,
        message: 'User logged in successfully',
        data: {
            accessToken,
        },
    });
}));
exports.AuthControllers = {
    registerUser,
    loginUser,
};
