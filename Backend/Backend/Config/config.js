const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://hashim:hasim123@cluster0.yip9arw.mongodb.net/carapp?retryWrites=true&w=majority',{
    
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,    

}).then(()=>{
    console.log(`connection successfull`)
       
}).catch((err)=>{
    console.log(`connection not Successful`)
})
