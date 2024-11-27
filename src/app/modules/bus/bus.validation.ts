import { z } from 'zod';

const createBusValidationSchema = z.object({
  body: z.object({
    busName: z.string().min(1, 'Bus name is required'),
    busNumber: z.string().min(1, 'Bus number is required'),
    from: z.string().min(1, 'Departure location is required'),
    to: z.string().min(1, 'Arrival location is required'),
    departureTime: z.string().min(1, 'Departure time is required'),
    arrivalTime: z.string().min(1, 'Arrival time is required'),
    totalSeats: z.number().min(1, 'Total seats must be a positive number'),
    availableSeats: z.number().min(0, 'Available seats must be non-negative'),
    price: z.number().min(0, 'Price must be a positive number'),
  }),
});

const updateBusValidationSchema = z.object({
  body: z.object({
    busName: z.string().optional(),
    busNumber: z.string().optional(),
    from: z.string().optional(),
    to: z.string().optional(),
    departureTime: z.string().optional(),
    arrivalTime: z.string().optional(),
    totalSeats: z.number().optional(),
    availableSeats: z.number().optional(),
    price: z.number().optional(),
    available: z.boolean().optional(),
  }),
});

export const busValidation = {
  createBusValidationSchema,
  updateBusValidationSchema,
};
