"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.config = {
    node_dev: 'production',
    port: process.env.PORT,
    db_url: process.env.DB_URL,
    jwt_access_token: process.env.JWT_ACCESS_TOKEN,
    bcrypt_salt_round: process.env.BCRYPT_SALT_ROUNDS,
};
