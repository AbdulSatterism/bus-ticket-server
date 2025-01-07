import { z } from 'zod';

const createTicketValidationSchema = z.object({
  body: z.object({
    busId: z.string(),
    seatNumber: z.string(),
    status: z.enum(['available', 'booked']),
    travelDate: z.string(),
  }),
});

const updateTicketValidationSchema = z.object({
  body: z.object({
    busId: z.string().optional(),
    seatNumber: z.string().optional(),
    travelDate: z.string().optional(),
    status: z.enum(['available', 'booked']).optional(),
  }),
});

export const ticketValidations = {
  createTicketValidationSchema,
  updateTicketValidationSchema,
};
