const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid');
const stripe = require('stripe')('sk_test_51NH2cbSA65ARtDa4zp5zXHOSfwMVv4mbHC8FdgMOf17xzWkgi1VycMkT9dROE3n207LT0vgWELRqJHkmP58nuwIY003tmHA3I3');
const Order = require('../models/orderModel')

router.post('/placeorder', async (req, res) => {
    const { token, subTotal, currentUser, cartItems } = req.body;


    try {
        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        });
        const payment = await stripe.paymentIntents.create({
            amount: subTotal * 100,
            currency: 'inr',
            customer: customer.id,
            receipt_email: token.email,
            // automatic_payment_methods: {
            //     enabled: true,
            // },
        }, {
            idempotencyKey: uuidv4(),
        });
        if (payment) {
            const newOrder = new Order({
                name: currentUser.name,
                email: currentUser.email,
                userid: currentUser._id,
                orderItems: cartItems,
                orderAmount: subTotal,
                store: currentUser.store,
                shippingAddress: {
                    street: token.card.address_line1,
                    city: token.card.address_city,
                    country: token.card.address_country,
                    pincode: token.card.address_zip,
                },
                transactionId: token.id
            });
            newOrder.save();
            res.send('Payment Success')
        } else {
            res.send('Payment Failed')
        }
    } catch (error) {
        res.status(400).json({
            message: 'Something went wrong',
            error: error.stack,
        });
    }
});

router.post("/getuserorder", async (req, res) => {
    const { userid } = req.body;
    try {
        const orders = await Order.find({ userid }).sort({ _id: "-1" });
        res.status(200).send(orders);
    } catch (error) {
        res.status(400).json({
            message: "Something Went Wrong",
            error: error.stack,
        });
    }
});

router.get("/alluserorder", async (req, res) => {
    try {
        const orders = await Order.find({});
        res.status(200).send(orders);
    } catch (error) {
        res.status(400).json({
            message: "Something Went Wrong",
            error: error.stack,
        });
    }

});
router.post("/deliverorder", async (req, res) => {
    try {
        const orderid = req.body.orderid
        const order = await Order.findOne({ _id: orderid });
        order.isDelivered = true;
        await order.save()
        res.status(200).send('Order delivered successfully');
    } catch (error) {
        res.status(400).json({
            message: "Something Went Wrong",
            error: error.stack,
        });
    }

});

module.exports = router;


