/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from 'http-status';
import AppError from '../../errors/appError';
import { TTicket } from './ticket.interface';
import { Bus } from '../bus/bus.model';
import { Ticket } from './ticket.model';

const createTicketIntoDB = async (payload: TTicket) => {
  const { busId } = payload;
  const busExist = await Bus.findById(busId);

  if (!busExist) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      'This Bus not available in database',
    );
  }

  if (!busExist?.available) {
    throw new AppError(httpStatus.BAD_REQUEST, 'bus not available this time');
  }

  const result = await Ticket.create(payload);

  return result;
};

const updateTicketByAdmin = async (id: string, payload: TTicket) => {
  const ticketExist = await Ticket.findById(id);

  if (!ticketExist) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      'This ticket is not available in database',
    );
  }

  const result = await Ticket.findByIdAndUpdate(id, payload, { new: true });

  return result;
};

const deleteTicketByAdmin = async (id: string) => {
  const ticketExist = await Ticket.findById(id);

  if (!ticketExist) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      'This ticket is not available in database',
    );
  }

  const result = await Ticket.findByIdAndDelete(id, { new: true });

  return result;
};

// get available ticket for specific bus=>

const getAllAvailableTicketSpecificBus = async (query: {
  busId?: string;
  travelDate?: string;
}) => {
  const filter: any = { status: 'available' };

  // Add busId to the filter if provided
  if (query?.busId) {
    filter.busId = query.busId;
  }
  if (query?.travelDate) {
    filter.travelDate = query.travelDate;
  }

  // Find tickets based on the filter
  const result = await Ticket.find(filter).populate('busId');

  return result;
};

export const ticketServices = {
  createTicketIntoDB,
  updateTicketByAdmin,
  deleteTicketByAdmin,
  getAllAvailableTicketSpecificBus,
};
