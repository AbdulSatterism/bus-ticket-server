import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import auth from '../../middleware/auth';
import { USER_ROLE } from '../user/user.constant';
import { ticketValidations } from './ticket.validation';
import { ticketController } from './ticket.controller';

const router = express.Router();

router.post('/admin/ticket', auth(USER_ROLE.Admin), validateRequest(ticketValidations.createTicketValidationSchema) ,ticketController.createTicket);

// router.put('/admin/bus/:id',auth(USER_ROLE.Admin),validateRequest(busValidation.updateBusValidationSchema) ,busController.busUpdate);

// router.delete('/admin/bus/:id',auth(USER_ROLE.Admin),busController.busDelete);

export const ticketRoutes = router;
