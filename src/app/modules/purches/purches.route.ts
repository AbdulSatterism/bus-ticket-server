import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import auth from '../../middleware/auth';
import { USER_ROLE } from '../user/user.constant';
import { purchasesValidation } from './purches.validation';
import { purchasesController } from './purches.controller';

const router = express.Router();

router.post(
  '/tickets/purchase',
  auth(USER_ROLE.Admin, USER_ROLE.User),
  validateRequest(purchasesValidation.createPurchasValidationSchema),
  purchasesController.purchasesTicket,
);

export const purchasesRoutes = router;
