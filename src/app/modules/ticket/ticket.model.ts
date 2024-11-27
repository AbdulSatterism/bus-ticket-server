import { model, Schema } from 'mongoose';
import { TTicket } from './ticket.interface';

const ticketSchema = new Schema<TTicket>(
  {
    busId: { type: Schema.Types.ObjectId, ref: 'Bus', required: true },
    seatNumber: { type: String, required: true },
    status: { type: String, enum: ['available', 'booked'], required: true },
    travelDate: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export const Ticket = model<TTicket>('Ticket', ticketSchema);
