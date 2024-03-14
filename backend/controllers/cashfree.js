import { Cashfree } from "cashfree-pg"; 
import orderModel from '../models/order.js'
import cartModel from '../models/cart.js'
import crypto from 'crypto'

const APP_ID = process.env.APP_ID ;
const SECRET_KEY = process.env.SECRET_KEY ;
const BASE_URL = process.env.BASE_URL || "http://localhost:5000";
const FRONT_URL = process.env.FRONT_URL || "http://localhost:5173";

Cashfree.XClientId = APP_ID;
Cashfree.XClientSecret = SECRET_KEY;
Cashfree.XEnvironment = Cashfree.Environment.SANDBOX;



/**
 * Route: /cashfree/create/:total_amount
 * Descr: create cashfree order
 */
export const createOrder = (req, res) => {

    const orderId = crypto.randomBytes(10).toString('hex');

    var request = {
        "order_amount": req.params.total_amount,
        "order_currency": "INR",
        "order_id": orderId,
        "customer_details": {
            "customer_id": req.UserID,
            "customer_phone": "9999999999"
        },
        "order_meta": {
            "return_url": `${BASE_URL}/cashfree/order/${req.UserID}`,
            "payment_methods": "cc, dc, ccc, ppc, nb, upi, paypal, emi"
        }
    };

    Cashfree.PGCreateOrder("2022-09-01", request).then((response) => {
        res.send(response.data);
    }).catch((error) => {
        // console.error('Error:', error);
        res.send(error);
    });
}


/**
 * Route: /cashfree/order/:userID
 * Desc: get cash free order after payment
 */
export const order = async (req, res) => {
    const cart = await cartModel.find({ userID: req.params.userID});

    const newOrderItems = cart.map(async (cartItem) => {
        try {
          const itemData = {
            status: "PAID",
            orderID: cartItem._id,
            userID: cartItem.userID,
            serviceID: cartItem.serviceID,
            address: cartItem.address,
            time_slot: cartItem.time_slot,
            date: cartItem.date
          };
      
          const orderItem = await orderModel.create(itemData);

          const result = await cartModel.findOneAndDelete({ '_id': cartItem._id});
          console.log(result);

          if(result){
            res.redirect(`${FRONT_URL}/successpayment`)
          }
          return orderItem;
        } catch (error) {
          console.error(`Failed to create order item ${cartItem._id}:`, error);
        }
      });
      
      // Wait for all items to be created or for errors to occur
      await Promise.all(newOrderItems);

      if(newOrderItems){
       

         console.log(`Order item created successfully`)
    
      }

};



/**
 * Route: /cashfree/getOrder/:orderID
 * Desc: get cash free order
 */
export const getOrder = (req, res) => {
    const order_id = req.params.order_id
    Cashfree.PGFetchOrder("2022-09-01", order_id).then((response) => {
        console.log('Order fetched successfully:', response.data);
        res.send(response.data);
    }).catch((error) => {
        console.error('Error:', error.response.data.message);
        res.send(error.response.data.message);
    });
}


export const payment = (req, res) => {
        const {paymentData} = req.body;
      
        // Validate the notification from Cashfree (refer to Cashfree documentation)
      
        if (isValidNotification(paymentData)) {
          if (paymentData.status === 'SUCCESS') {
            // Payment successful, process the order accordingly
            console.log('Payment successful:', paymentData);
            // Update your order status in your database
            res.status(200).send('Payment successful');
          } else {
            // Payment failed, handle the failure scenario
            console.error('Payment failed:', paymentData);
            res.status(400).send('Payment failed. Please contact support.');
          }
        } else {
          // Invalid notification, handle potential security issues
          console.error('Invalid notification:', paymentData);
          res.status(400).send('Invalid payment notification.');
        }
      
}
