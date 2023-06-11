<<<<<<< HEAD
const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "order name required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
    },
    userid: {
      type: String,
    },
    orderItems: [],
    shippingAddress: {
      type: Object,
    },
    orderAmount: {
      type: String,
      //   required: true,
    },
    isDeliverd: {
      type: Boolean,
      default: false,
    },
    transectionId: {
      type: String,
      //   required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("order", orderSchema);
=======
const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'order name required']
    },
    email: {
        type: String,
        required: [true, 'email is required']
    },
    userId: {
        type: String,
        // required: true
    },
    orderItems: [],
    shippingAddress: {
        type: Object,
        // required: true
    },
    orderAmount: {
        type: String,
        // required: true
    },
    isDelivered: {
        type: String,
        // required: true
    },
    transactionId: {
        type: String,
        // required: true
    },


}, { timestamps: true })

module.exports = mongoose.model('order', orderSchema);
>>>>>>> 1eb188443b85fc28a9a2211b2a3211d727b6f8aa
