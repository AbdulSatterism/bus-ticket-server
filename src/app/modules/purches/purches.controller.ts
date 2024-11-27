import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { purchaseServices } from './purches.services';

const purchasesTicket = catchAsync(async (req, res) => {
  const result = await purchaseServices.createPurchesTicket(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Ticket Purchases successfully',
    data: result,
  });
});

export const purchasesController = {
  purchasesTicket,
};
