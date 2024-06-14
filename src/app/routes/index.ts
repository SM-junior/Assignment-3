import express from 'express';
import { FacilityRoute } from '../modules/Facility/facility.route';
import { UserRoute } from '../modules/User/user.route';

const router = express.Router();

const moduleRoutes = [
    {
        path: '/auth',
        route: UserRoute
    },
    {
        path: '/',
        route: FacilityRoute
    },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))
export default router;