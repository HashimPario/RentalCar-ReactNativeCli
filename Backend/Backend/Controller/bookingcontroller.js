///booking add data
const bookingModel = require('../Model/bookingSchema')

const authbookingdata = (req, res)=>{
    
    

    let bookpostCreate = new bookingModel({

        productName: req.body.productName, 
        productPrice: req.body.productPrice,
        imageURL: req.body.imageURL,
        userEmail: req.body.userEmail,
        qty: req.body.qty,
        category: req.body.category,
        hotelname: req.body.hotelname,
        hotelemail: req.body.hotelemail,
        hotelPrice: req.body.hotelPrice,
        hotelDate: req.body.hotelDate,
        paymentstatus: req.body.paymentstatus,
        packageid : req.body.packageid

    })
    
    bookpostCreate.save()
    .then((response)=>{
        console.log(`response success`)

        res.status(200).send({result: response, Message: "Post Data Successfully"})

        console.log(bookpostCreate)

    }).catch((err)=>{
        res.status(400).send({result: err, Message: "Post Data Not Successfully"})
    })

}



//get post by email user

const getbookbyemail = async(req, res)=>{
    const {userEmail} = req.params;
    const allbookemail = await bookingModel.find({userEmail: userEmail});
    res.json(allbookemail);

}

//get post by email admin

const getbookbyemailadmin = async(req, res)=>{
    const {hotelemail} = req.params;
    const allbookemailadmin = await bookingModel.find({hotelemail: hotelemail});
    res.json(allbookemailadmin);

}


//getsingleuserid

const getbookingpckid = async(req, res)=>{
    try {
        console.log(req.params);
        const {packageid} = req.params;

        const userindividual = await bookingModel.findOne({packageid:packageid});
        console.log(userindividual);
        res.status(201).json(userindividual)

    } catch (error) {
        res.status(422).json(error);
    }
}


module.exports = {authbookingdata, getbookbyemail, getbookbyemailadmin, getbookingpckid }