import express from 'express';
import { AuthRoute } from '../modules/Auth/auth.route';
import { FacilityRoute } from '../modules/Facility/facility.route';
import { UserRoute } from '../modules/User/user.route';

const router = express.Router();

const moduleRoutes = [
    {
        path: '/user',
        route: UserRoute
    },
    {
        path: '/auth',
        route: AuthRoute
    },
    {
        path: '/',
        route: FacilityRoute
    },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))
export default router;