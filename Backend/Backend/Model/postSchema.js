const mongoose = require('mongoose');

const postSchema = mongoose.Schema({

    productName: {type:String},
    productPrice: {type: Number},
    imageURL: {type:String},
    userEmail:{type:String},
    qty:{type:String},
    category:{type:String},
    hotelname: {type: String}

}) 


const postModel = mongoose.model('postData',postSchema);

module.exports = postModel;