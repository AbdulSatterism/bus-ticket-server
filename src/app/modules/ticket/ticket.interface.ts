import { Types } from 'mongoose';

export type TTicket = {
  busId: Types.ObjectId;
  seatNumber: string;
  status: 'available' | 'booked';
  travelDate: string;
};
