/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from 'http-status';
import AppError from '../../errors/appError';
import { TBus } from './bus.interface';
import { Bus } from './bus.model';

const createBusIntoDB = async (payload: TBus) => {
  const { busNumber } = payload;
  const busExist = await Bus.findOne({ busNumber });

  if (busExist) {
    throw new AppError(httpStatus.BAD_REQUEST, 'This Bus is already exist!');
  }

  const result = await Bus.create(payload);

  return result;
};

const updateBusByAdmin = async (id: string, payload: TBus) => {
  const busExist = await Bus.findById(id);

  if (!busExist) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      'This bus is not available in database',
    );
  }

  const result = await Bus.findByIdAndUpdate(id, payload, { new: true });

  return result;
};

const deleteBusByAdmin = async (id: string) => {
  const busExist = await Bus.findById(id);

  if (!busExist) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      'This bus is not available in database',
    );
  }

  const result = await Bus.findByIdAndDelete(id, { new: true });

  return result;
};

// get available buses for users; if bus not available then don't show those

const getAllAvailableBusFromDB = async (query: {
  from?: string;
  to?: string;
}) => {
  //default filtering available buses
  let filter: any = { available: true };

  // Add case-insensitive 'from' and 'to' filters
  if (query?.from) {
    filter.from = { $regex: query.from, $options: 'i' };
  }
  if (query.to) {
    filter.to = { $regex: query.to, $options: 'i' };
  }

  // If both 'from' and 'to' are provided, check if they are the same and exclude such buses
  if (
    query.from &&
    query.to &&
    query.from.toLowerCase() === query.to.toLowerCase()
  ) {
    // Exclude buses where 'from' and 'to' are the same
    filter.from = { $ne: query.from };
    filter.to = { $ne: query.to };
  }
  const result = await Bus.find(filter);

  return result;
};

export const busServices = {
  createBusIntoDB,
  updateBusByAdmin,
  deleteBusByAdmin,
  getAllAvailableBusFromDB,
};
