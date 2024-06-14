"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const facility_route_1 = require("../modules/Facility/facility.route");
const user_route_1 = require("../modules/User/user.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/',
        route: facility_route_1.FacilityRoute
    },
    {
        path: '/auth',
        route: user_route_1.UserRoute
    }
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
