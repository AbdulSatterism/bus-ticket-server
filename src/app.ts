/* eslint-disable no-undef */
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import notFound from './app/middleware/notFound';

// import Stripe from 'stripe';

// export const stripe = new Stripe('sk_test_51JBBV6KFMO2n3YzdTu2HalUMJTleaCvfoMKpH0HD1pQmDLlvcRQDsS6DnDqW1ZqX1quXGQGHSTZYhWBy6vm8M3Yk00MgKxHkAX'); 

const app: Application = express();

app.use(express.json());
app.use(cors());

// application routes

app.use('/', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to bus ticket server');
});


// app.post('/create-payment-intent', async (req, res) => {
//   const { amount, currency } = req.body;

//   try {
//     // Create a PaymentIntent with the specified amount and currency
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: amount *100, // Amount in cents (e.g., 500 cents for $5.00)
//       currency: currency, // Example: 'usd'
//     });

//     // Send client secret back to frontend
//     res.status(200).send({
//       clientSecret: paymentIntent
//     });
//   } catch (error) {
//     res.status(500).send( error);
//   }
// });


app.use(globalErrorHandler);
app.use(notFound);

export default app;
