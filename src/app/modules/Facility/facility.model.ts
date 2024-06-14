import { model, Schema } from 'mongoose';
import { TFacility } from './facility.interface';

const FacilitySchema = new Schema<TFacility>({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    pricePerHour: {
        type: Number,
    },
    location: {
        type: String,
    },
    isDeleted: {
        type: Boolean,
        default: false

    },
});

export const FacilityModel = model<TFacility>('FacilityModel', FacilitySchema);