"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacilityRoute = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = require("../../middleware/validateRequest");
const facility_controller_1 = require("./facility.controller");
const facility_validation_1 = require("./facility.validation");
const router = express_1.default.Router();
router.post('/facility', (0, validateRequest_1.validateRequest)(facility_validation_1.FacilityValidation.FacilitySchemaValidation), facility_controller_1.FacilityControllers.createFacility);
exports.FacilityRoute = router;
