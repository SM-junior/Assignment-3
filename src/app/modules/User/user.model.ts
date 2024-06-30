
import { Schema, model } from 'mongoose';
import { TUser } from './user.interface';
import bcrypt from 'bcrypt';
import { config } from '../../config';
import { UserRoll } from './user.constant';

const UserSchema = new Schema<TUser>({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "password is required"],
        select: false,
    },
    phone: {
        type: String,
    },
    role: {
        type: String,
        // enum: ['USER', 'ADMIN', 'SUPER_ADMIN'],
        enum: Object.keys(UserRoll),
        default: 'USER',
        required: true,
    },
    address: {
        type: String,
    },
});

UserSchema.pre('save', async function (next) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const user = this;
    user.password = await bcrypt.hash(
        user.password as string,
        Number(config.bcrypt_salt_round),
    );
    next();
});
UserSchema.post('save', function (doc, next) {
    doc.password = ' ';
    next();
});

export const UserModel = model<TUser>('UserModel', UserSchema);
