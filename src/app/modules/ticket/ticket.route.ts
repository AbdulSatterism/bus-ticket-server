import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import auth from '../../middleware/auth';
import { USER_ROLE } from '../user/user.constant';
import { ticketValidations } from './ticket.validation';
import { ticketController } from './ticket.controller';

const router = express.Router();

router.post(
  '/admin/ticket',
  auth(USER_ROLE.Admin),
  validateRequest(ticketValidations.createTicketValidationSchema),
  ticketController.createTicket,
);

router.put(
  '/admin/ticket/:id',
  auth(USER_ROLE.Admin),
  validateRequest(ticketValidations.updateTicketValidationSchema),
  ticketController.ticketUpdate,
);

router.delete(
  '/admin/ticket/:id',
  auth(USER_ROLE.Admin),
  ticketController.ticketDelete,
);

//  View available tickets for specific buses and time periods.

router.get('/tickets', ticketController.getAllAvailableTicket);

export const ticketRoutes = router;
