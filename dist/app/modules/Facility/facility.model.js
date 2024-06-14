"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacilityModel = void 0;
const mongoose_1 = require("mongoose");
const FacilitySchema = new mongoose_1.Schema({
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
exports.FacilityModel = (0, mongoose_1.model)('FacilityModel', FacilitySchema);
