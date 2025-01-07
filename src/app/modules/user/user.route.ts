import { userController } from './user.cotroller';
import express from 'express';
import { UserValidations } from './user.validation';
import validateRequest from '../../middleware/validateRequest';

const router = express.Router();

router.post('/register',validateRequest(UserValidations.createUserValidationSchema), userController.createUser);
router.post('/verify', userController.verifyUser);

// router.post(
//   '/register',
//   validateRequest(UserValidations.createUserValidationSchema),
//   UserController.createUser,
// );

// router.post('/login', UserController.loginUser);

// router.post('/logout', UserController.logoutUser);

export const UserRoutes = router;
