export type TBus = {
  busName: string;
  busNumber: string;
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  totalSeats: number;
  availableSeats: number;
  price: number;
  available?: boolean;
};
