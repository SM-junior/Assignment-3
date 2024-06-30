import { UserRoll } from "./user.constant";

export type TUser = {
    name: string;
    email: string;
    password: string;
    phone: string;
    // role: 'USER' | 'ADMIN' | 'SUPER_ADMIN';
    role: keyof typeof UserRoll;
    address: string;
};