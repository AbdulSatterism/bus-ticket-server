import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { busServices } from './bus.services';

const createBus = catchAsync(async (req, res) => {
  const result = await busServices.createBusIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Bus created successfully',
    data: result,
  });
});

const busUpdate = catchAsync(async (req, res) => {
  const result = await busServices.updateBusByAdmin(req.params.id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Bus updated successfully',
    data: result,
  });
});

const busDelete = catchAsync(async (req, res) => {
  const result = await busServices.deleteBusByAdmin(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Bus deleted successfully',
    data: result,
  });
});

const getAllAvailableBus = catchAsync(async (req, res) => {
  const result = await busServices.getAllAvailableBusFromDB(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Available buses got successfully',
    data: result,
  });
});

export const busController = {
  createBus,
  busUpdate,
  busDelete,
  getAllAvailableBus,
};
