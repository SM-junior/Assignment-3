import express from 'express';
import { validateRequest } from '../../middleware/validateRequest';
import { FacilityControllers } from './facility.controller';
import { FacilityValidation } from './facility.validation';

const router = express.Router();

router.post('/facility', validateRequest(FacilityValidation.FacilitySchemaValidation),
    FacilityControllers.createFacility
);

export const FacilityRoute = router;