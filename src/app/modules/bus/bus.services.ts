import httpStatus from "http-status";
import AppError from "../../errors/appError";
import { TBus } from "./bus.interface";
import { Bus } from "./bus.model";

const createBusIntoDB = async (payload: TBus) => {
    const {busNumber}=payload;
    const busExist = await Bus.findOne({busNumber})
  
    if (busExist) {
      throw new AppError(httpStatus.BAD_REQUEST, 'This Bus is already exist!');
    }
  
    const result = await Bus.create(payload)

    return result;

  };

 

const updateBusByAdmin = async (id:string,payload:TBus) => {
    
    const busExist = await Bus.findById(id);
  
    if (!busExist) {
      throw new AppError(httpStatus.BAD_REQUEST, 'This bus is not available in database');
    }
  
    const result = await Bus.findByIdAndUpdate(id, payload,{new:true})

    return result;

  };

const deleteBusByAdmin = async (id:string) => {
    
    const busExist = await Bus.findById(id);
  
    if (!busExist) {
      throw new AppError(httpStatus.BAD_REQUEST, 'This bus is not available in database');
    }
  
    const result = await Bus.findByIdAndDelete(id,{new:true})

    return result;

  };

  export const busServices ={
    createBusIntoDB,
    updateBusByAdmin,
    deleteBusByAdmin
  }