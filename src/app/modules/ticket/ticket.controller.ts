import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ticketServices } from "./ticket.services";

const createTicket = catchAsync(async (req, res) => {
    const result = await ticketServices.createTicketIntoDB(req.body)
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Ticket created successfully',
      data: result
    });
  });


  export const ticketController={
    createTicket
  }