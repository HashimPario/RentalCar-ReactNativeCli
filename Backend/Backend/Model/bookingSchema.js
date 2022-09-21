const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({

    productName: {type:String},
    productPrice: {type:Number},
    imageURL: {type:String},
    userEmail:{type:String},
    qty:{type:Number},
    category:{type:String},
    hotelname: {type: String},
    hotelemail:{type: String},
    hotelPrice: {type: Number},
    hotelDate: {type: String},
    paymentstatus : {type: String},
    packageid : {type: String}

}) 


const bookingModel = mongoose.model('bookingData',bookSchema);

module.exports = bookingModel;