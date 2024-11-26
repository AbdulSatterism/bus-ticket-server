import httpStatus from "http-status";
import AppError from "../../errors/appError";
import { TTicket } from "./ticket.interface";
import { Bus } from "../bus/bus.model";
import { Ticket } from "./ticket.model";



const createTicketIntoDB = async (payload: TTicket) => {
    const {busId,seatNumber}=payload;
    const busExist = await Bus.findById(busId)
  
    if (!busExist) {
      throw new AppError(httpStatus.BAD_REQUEST, 'This Bus not available in database');
    }

    if (!busExist?.available) {
      throw new AppError(httpStatus.BAD_REQUEST, 'bus not available this time');
    }
  
// const isThisTicketExixt = await Ticket.findOne({seatNumber});

//same bus same ticket already exist or not if exist then throw error

// if (busExist?._id.equals(busId) || isThisTicketExixt?.seatNumber === seatNumber) {
//   throw new AppError(httpStatus.BAD_REQUEST, 'This ticket already exist');
// }






    const result = await Ticket.create(payload)

    return result;

  };

 

// const updateBusByAdmin = async (id:string,payload:TBus) => {
    
//     const busExist = await Bus.findById(id);
  
//     if (!busExist) {
//       throw new AppError(httpStatus.BAD_REQUEST, 'This bus is not available in database');
//     }
  
//     const result = await Bus.findByIdAndUpdate(id, payload,{new:true})

//     return result;

//   };

// const deleteBusByAdmin = async (id:string) => {
    
//     const busExist = await Bus.findById(id);
  
//     if (!busExist) {
//       throw new AppError(httpStatus.BAD_REQUEST, 'This bus is not available in database');
//     }
  
//     const result = await Bus.findByIdAndDelete(id,{new:true})

//     return result;

//   };

  export const ticketServices ={
    createTicketIntoDB,
  }