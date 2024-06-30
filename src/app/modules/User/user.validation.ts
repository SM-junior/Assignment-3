import { z } from 'zod';
import { UserRoll } from './user.constant';

const createAminValidations = z.object({
    body: z.object({
        name: z.string(),
        email: z.string(),
        password: z.string(),
        phone: z.string().optional(),
        // role: z.enum(['USER', 'ADMIN', 'SUPER_ADMIN']),
        role: z.nativeEnum(UserRoll),
        address: z.string().optional(),
    }),
});

export const UserValidation = {
    createAminValidations,
};