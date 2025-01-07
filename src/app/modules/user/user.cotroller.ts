import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { UserServices } from './user.service';


const createUser = catchAsync(async (req, res) => {
  const result = await UserServices.createUserWithOTP(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'User registered successfully. OTP sent to the phone.',
    data: result,
  });
});

const verifyUser = catchAsync(async (req, res) => {
  const { phone, otp } = req.body;
  const result = await UserServices.verifyUserOTP(phone, otp);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User verified successfully.',
    data: result,
  });
});

export const userController = {
  createUser,
  verifyUser,
};

// const createUser = catchAsync(async (req, res) => {
//   const result = await UserServices.createUserIntoDB(req.body);

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'User registered successfully',
//     token: result?.accessToken,
//     data: result?.resUser,
//   });
// });

// const loginUser = catchAsync(async (req, res) => {
//   const result = await UserServices.loginUser(req.body);

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'User login successfully',
//     token: result?.accessToken,
//     data: result?.resUser,
//   });
// });

// const logoutUser = catchAsync(async (req, res) => {
//   await UserServices.logoutUser(req);

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'User Logout successfully',
//     data: '',
//   });
// });

// export const UserController = {
//   createUser,
//   loginUser,
//   logoutUser,
// };
