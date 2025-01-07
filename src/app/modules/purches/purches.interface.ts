import { Types } from 'mongoose';

export interface TPurchase {
  userId: Types.ObjectId;
  ticketId: Types.ObjectId;
  busId: Types.ObjectId;
  purchaseDate: Date;
  status: 'pending' | 'completed';
}
