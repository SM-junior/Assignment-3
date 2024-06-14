
import { Schema, model } from 'mongoose';
import { TUser } from './user.interface';
import bcrypt from 'bcrypt';
import { config } from '../../config';

const UserSchema = new Schema<TUser>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
    },
    phone: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
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
