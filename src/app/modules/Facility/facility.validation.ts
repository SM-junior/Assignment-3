import { z } from 'zod';

const FacilitySchemaValidation = z.object({
    body: z.object({
        name: z.string(),
        description: z.string(),
        pricePerHour: z.number(),
        location: z.string(),
        isDeleted: z.boolean().default(false),
    }),
});
export const FacilityValidation = {
    FacilitySchemaValidation,
};