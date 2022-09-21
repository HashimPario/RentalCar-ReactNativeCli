const mongoose = require('mongoose');

const authSchema = new mongoose.Schema({
    hotelname: {type: String},
    name:{type: String},
    email: {type:String},
    pass: {type:String},
    role: {type:String},
    contact: {type: Number},
    address : {type: String}
}) 


const authModel =  new mongoose.model('signupad',authSchema);

module.exports = authModel;