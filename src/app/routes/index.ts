import { Router } from 'express';
import { UserRoutes } from '../modules/user/user.route';
import { busRoutes } from '../modules/bus/bus.route';
import { ticketRoutes } from '../modules/ticket/ticket.route';



const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: UserRoutes,
  },
  {
    path: '/',
    route: busRoutes,
  },
  {
    path: '/',
    route: ticketRoutes,
  }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
