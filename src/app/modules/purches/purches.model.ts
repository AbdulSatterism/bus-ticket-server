import { model, Schema } from 'mongoose';
import { TPurchase } from './purches.interface';

const purchaseSchema = new Schema<TPurchase>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    ticketId: { type: Schema.Types.ObjectId, ref: 'Ticket', required: true },
    busId: { type: Schema.Types.ObjectId, ref: 'Bus', required: true },
    purchaseDate: { type: Date, default: Date.now },
    status: {
      type: String,
      enum: ['pending', 'completed'],
      default: 'pending',
    },
  },
  {
    timestamps: true,
  },
);

export const Purchase = model<TPurchase>('Purchase', purchaseSchema);
