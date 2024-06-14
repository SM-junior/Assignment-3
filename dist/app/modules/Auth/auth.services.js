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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthServices = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../../config");
const user_model_1 = require("../User/user.model");
const auth_utils_1 = require("./auth.utils");
const register = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.UserModel.find({ email: payload.email });
    if (!user) {
        throw new Error('This user already exits');
    }
    payload.role = 'user';
    const result = yield user_model_1.UserModel.create(payload);
    return result;
});
const login = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.UserModel.findOne({ email: payload.email }).select('+password');
    if (!user) {
        throw new Error('user not found');
    }
    const passwordMatched = yield (0, auth_utils_1.isPasswordMatched)(payload.password, user.password);
    if (!passwordMatched) {
        throw new Error('Password do not matched');
    }
    const jwtPayload = {
        email: user.email,
        role: user.role,
    };
    const accessToken = jsonwebtoken_1.default.sign(jwtPayload, config_1.config.jwt_access_token, { expiresIn: '3d' });
    const refreshToken = jsonwebtoken_1.default.sign({ payload }, '3d', { expiresIn: '30d' });
    return {
        accessToken,
        refreshToken
    };
});
exports.AuthServices = {
    register,
    login,
};
