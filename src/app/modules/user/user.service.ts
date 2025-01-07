/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from 'http-status';
import AppError from '../../errors/appError';
import { TUser } from './user.interface';
import { User } from './user.model';
import config from '../../config';

import { Twilio } from 'twilio';


const twilioClient = new Twilio(config.twilio_account_sid as string, config.twilio_auth_token as string);

const generateOTP = () => Math.floor(1000 + Math.random() * 9000).toString();

const createUserWithOTP = async (payload: TUser) => {
  const userExists = await User.isUserExistByEmail(payload.email);
  if (userExists) {
    throw new AppError(httpStatus.BAD_REQUEST, 'This user already exists!');
  }

  const otp = generateOTP();
  payload.otp = otp;

  const newUser = await User.create(payload);



  // Send OTP via Twilio
  await twilioClient.messages.create({
    body: `Your OTP code is ${otp}`,
    from: config.twilio_phone_number,
    to: payload.phone,
  })

  return newUser;
};

const verifyUserOTP = async (phone: string, otp: string) => {
  const user = await User.findOne({ phone, otp });

  if (!user) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Invalid OTP or phone number.');
  }


 const updatedUser= await User.findByIdAndUpdate(user._id, { verified: true, otp: undefined },{new:true});

  // user.verified = true;
  // user.otp = undefined; // Clear OTP after verification
  // await user.save();

  return updatedUser;
};

export const UserServices = {
  createUserWithOTP,
  verifyUserOTP,
};




// const createUserIntoDB = async (payload: TUser) => {
//   const user = await User.isUserExistByEmail(payload?.email);

//   if (user) {
//     throw new AppError(httpStatus.BAD_REQUEST, 'This user is already exist!');
//   }

//   //create new user
//   const newUser = await User.create(payload);

//   //create token and sent to the  client

//   type TJWTPayload = {
//     userId: any;
//     role: 'Admin' | 'User';
//     email: string;
//   };

//   const jwtPayload: TJWTPayload = {
//     userId: newUser?._id,
//     role: newUser?.role,
//     email: newUser?.email,
//   };

//   const accessToken = createToken(
//     jwtPayload,
//     config.jwt_access_token as string,
//     config.jwt_access_expire_in as string,
//   );

//   const resUser = await User.findOne({ email: payload?.email });

//   return { accessToken, resUser };
// };

// const loginUser = async (payload: TLogin) => {
//   const { email, password } = payload;

//   // check user exist or not
//   const user = await User.findOne({ email: email }).select('+password');

//   if (!user) {
//     throw new AppError(httpStatus.NOT_FOUND, 'user not found');
//   }

//   //password matched or not
//   const hashPassword = user?.password;
//   const isPasswordMatch = await User.isPasswordMatched(password, hashPassword);
//   if (!isPasswordMatch) {
//     throw new AppError(httpStatus.FORBIDDEN, 'password not matched!!!');
//   }

//   //   jwt access token
//   type TJWTPayload = {
//     userId: any;
//     role: 'Admin' | 'User';
//     email: string;
//   };

//   const jwtPayload: TJWTPayload = {
//     userId: user?._id,
//     role: user?.role,
//     email: user?.email,
//   };

//   const accessToken = createToken(
//     jwtPayload,
//     config.jwt_access_token as string,
//     config.jwt_access_expire_in as string,
//   );

//   const resUser = await User.findOne({ email: email });

//   return { accessToken, resUser };
// };

// const logoutUser = async (req: Request) => {
//   return req?.res?.clearCookie('accessToken');
// };

// export const UserServices = {
//   createUserIntoDB,
//   loginUser,
//   logoutUser,
// };
