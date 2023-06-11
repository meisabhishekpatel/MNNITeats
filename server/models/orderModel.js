const mongoose = require('mongoose')

const orderScheme = mongoose.Schema({
name:{
    type:String,
    required:[true,'order name required']
},
email:{
    type:String,
    required:[true,'email is required']
},
userId:{
    type:String,
    required:true
},
orderItems: [],
shippingAddress:{
    type:String,
    required:true
},
orderAmount:{
    type:String,
    required:true
},
isDelivered:{
    type:String,
    required:true
},
transactionId:{
    type:String,
    required:true
},


},{timestamps:true})

module.exports = mongoose.model('order',orderScheme);
