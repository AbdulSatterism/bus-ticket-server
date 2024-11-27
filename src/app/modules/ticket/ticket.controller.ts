import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ticketServices } from './ticket.services';

const createTicket = catchAsync(async (req, res) => {
  const result = await ticketServices.createTicketIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Ticket created successfully',
    data: result,
  });
});

const ticketUpdate = catchAsync(async (req, res) => {
  const result = await ticketServices.updateTicketByAdmin(
    req.params.id,
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Ticket updated successfully',
    data: result,
  });
});

const ticketDelete = catchAsync(async (req, res) => {
  const result = await ticketServices.deleteTicketByAdmin(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Ticket deleted successfully',
    data: result,
  });
});

const getAllAvailableTicket = catchAsync(async (req, res) => {
  const result = await ticketServices.getAllAvailableTicketSpecificBus(
    req.query,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Available ticket got successfully',
    data: result,
  });
});

export const ticketController = {
  createTicket,
  ticketDelete,
  ticketUpdate,
  getAllAvailableTicket,
};
