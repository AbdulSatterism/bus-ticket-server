import { z } from 'zod';

const createPurchasValidationSchema = z.object({
  body: z.object({
    userId: z.string(),
    ticketId: z.string(),
    busId: z.string(),
  }),
});

export const purchasesValidation = {
  createPurchasValidationSchema,
};
