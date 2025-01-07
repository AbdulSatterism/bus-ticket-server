import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { busValidation } from './bus.validation';
import { busController } from './bus.controller';
import auth from '../../middleware/auth';
import { USER_ROLE } from '../user/user.constant';

const router = express.Router();

router.post(
  '/admin/bus',
  auth(USER_ROLE.Admin),
  validateRequest(busValidation.createBusValidationSchema),
  busController.createBus,
);

router.put(
  '/admin/bus/:id',
  auth(USER_ROLE.Admin),
  validateRequest(busValidation.updateBusValidationSchema),
  busController.busUpdate,
);

router.delete('/admin/bus/:id', auth(USER_ROLE.Admin), busController.busDelete);

//get all buses

router.get('/buses', busController.getAllAvailableBus);

export const busRoutes = router;
