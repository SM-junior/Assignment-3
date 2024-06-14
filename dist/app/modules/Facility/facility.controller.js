"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacilityControllers = void 0;
const catchAsync_1 = require("../../utils/catchAsync");
const facility_services_1 = require("./facility.services");
const createFacility = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield facility_services_1.FacilityServices.createFacilityIntoDb(req.body);
    res.status(200).json({
        success: true,
        massage: 'Facility added successfully',
        data: result
    });
}));
exports.FacilityControllers = {
    createFacility,
};
