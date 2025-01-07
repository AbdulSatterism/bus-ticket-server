import httpStatus from 'http-status';
import AppError from '../../errors/appError';
import { Bus } from '../bus/bus.model';
import { TPurchase } from './purches.interface';
import { Ticket } from '../ticket/ticket.model';
import { User } from '../user/user.model';
import { Purchase } from './purches.model';

const createPurchesTicket = async (payload: TPurchase) => {
  const { busId, ticketId, userId } = payload;
  const busExist = await Bus.findById(busId);
  const ticketExist = await Ticket.findById(ticketId);
  const userExist = await User.findById(userId);

  if (!busExist) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      'This Bus not available in database',
    );
  }
  if (!busExist?.available) {
    throw new AppError(httpStatus.BAD_REQUEST, 'bus not available this time');
  }

  if (!ticketExist) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      'This ticket not available in database',
    );
  }

  if (ticketExist?.status === 'booked') {
    throw new AppError(httpStatus.BAD_REQUEST, 'This ticket is already booked');
  }

  if (!userExist) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      'This User not available in database',
    );
  }

  if (busExist?.availableSeats <= 0) {
    throw new AppError(httpStatus.BAD_REQUEST, 'not available seats');
  }

  const result = await Purchase.create(payload);

  // update ticket status =>
  await Ticket.findByIdAndUpdate(ticketId, { status: 'booked' }, { new: true });

  //update bus availableSeats
  await Bus.findByIdAndUpdate(
    busId,
    { $inc: { availableSeats: -1 } },
    { new: true },
  );

  return result;
};




export const purchaseServices = {
  createPurchesTicket,
};
