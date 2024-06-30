import express from 'express';
import { auth } from '../../middleware/auth';
import { validateRequest } from '../../middleware/validateRequest';
import { UserRoll } from '../User/user.constant';
import { FacilityControllers } from './facility.controller';
import { FacilityValidation } from './facility.validation';

const router = express.Router();

router.post('/facility',
    validateRequest(FacilityValidation.FacilitySchemaValidation),
    auth(UserRoll.ADMIN),
    FacilityControllers.createFacility
);
router.delete('/facility/:id',
    // validateRequest(FacilityValidation.FacilitySchemaValidation),
    // auth(UserRoll.ADMIN),
    FacilityControllers.deleteFacility
);
router.put('/facility/:id',
    // validateRequest(FacilityValidation.updateFacilityValidationSchema),
    auth(UserRoll.ADMIN),
    FacilityControllers.updateFacility
);
router.get('/facility',
    FacilityControllers.getAllFacility
);



export const FacilityRoute = router;