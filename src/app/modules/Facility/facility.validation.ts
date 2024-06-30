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
const updateFacilityValidationSchema = z.object({
    body: z.object({
        name: z.string().optional(),
        description: z.string().optional(),
        pricePerHour: z.number(),
        location: z.string().optional(),
        isDeleted: z.boolean().default(false),
    }),
});
export const FacilityValidation = {
    FacilitySchemaValidation,
    updateFacilityValidationSchema
};