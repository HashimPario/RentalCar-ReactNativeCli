
const authModel = require('../Model/signupschema');
const postModel = require('../Model/postSchema');
const bcrypt = require("bcryptjs");
const bookingModel = require('../Model/bookingSchema')

///signup api

const authSignUp=async(req,res)=>{
    
    try {
        
        const { email, password, role, name, hotelname, contact, address } = await  req.body;
        console.log(req.body,'req.body')

        const checkUser = await authModel.findOne({email:email})
console.log(checkUser,'checkUser')

if(checkUser){
    return res.status(400).send({ success: false, message: "user already registered" });

}else{
    const hastPass = await bcrypt.hash(password,12);
    const userCreate = new authModel({email,pass:hastPass,role,name,hotelname, contact, address}) //store into Database
    userCreate.save()
    .then((response)=>{
        return res.status(200).send({ success: true, message:"Successfully Registered"})
    })
    .catch(()=>{
        return res.status(400).send({ success: false, message:"error"})
    })
}
    }
catch (e) {
    return res.status(401).send({ success: false, message: e.message });
  }
}




///signin api

const authsignin=async(req,res)=>{
    try {
console.log(req.body,'req.body')
let {email,password} = await req.body;
const checkUser = await authModel.findOne({email:email})

if(checkUser){
console.log(checkUser,'checkUser')
    const passTest = await bcrypt.compare(password,checkUser.pass)
    if(passTest){
        return res.status(200).send({
            message: "login successfull",
            success: true,
        data:{userId:checkUser._id,email:checkUser. email}})
    }else{
        return res.status(400).send({success:false,message:"Password Incorrect!"})
        return alert(data.Message)
    }

}else{
    return res.status(400).send({ success: false, message:"Email Not Found"}) 
}

    }
    catch(e){
        console.log(e,'eeee')
        return res.status(401).send({ success: false, message: e.message });
    }
}





///Add Post Data

const authPostdata = (req, res)=>{
    
    

    let postCreate = new postModel({
        productName: req.body.productName, 
        productPrice: req.body.productPrice,
        imageURL: req.body.imageURL,
        userEmail: req.body.userEmail,
        qty: req.body.qty,
        category: req.body.category,
        hotelname: req.body.hotelname

    })
    
    postCreate.save()
    .then((response)=>{
        console.log(`response success`)

        res.status(200).send({result: response, Message: "Post Data Successfully"})

        console.log(postCreate)

    }).catch((err)=>{
        res.status(400).send({result: err, Message: "Post Data Not Successfully"})
    })

}






//get all post data

const getallPost = async(req, res)=>{
    const allpost = await postModel.find();
    res.json(allpost);

}



//get all post data by categoryname

const getallPostbycategory = async(req, res)=>{
    const {productName} = req.params;

    const allpostcategory = await postModel.find({productName: productName});

    res.json(allpostcategory);

}


//get all post data by subcategoryname

const getallPostbysubcategory = async(req, res)=>{
    const {qty} = req.params;

    const allpostsubcategory = await postModel.find({qty: qty});

    res.json(allpostsubcategory);

}

//get all book data

const getallBook = async(req, res)=>{
    const allpostbook = await bookingModel.find();
    res.json(allpostbook);

}


//get all signup

const getallSignup = async(req, res)=>{
    const allsignup = await authModel.find();
    res.json(allsignup);

}

//get post by email

const getpostbyemail = async(req, res)=>{
    const {userEmail} = req.params;
    const allpostemail = await postModel.find({userEmail: userEmail});
    res.json(allpostemail);

}


//get post Signup by email

const getpostsignupbyemail = async(req, res)=>{
    const {email} = req.params;

    const allpostemailsignup = await authModel.find({email: email});
    res.json(allpostemailsignup);

}


//getsingleuserid

const getpostbyID = async(req, res)=>{
    try {
        console.log(req.params);
        const {id} = req.params;

        const userindividual = await postModel.findById({_id:id});
        console.log(userindividual);
        res.status(201).json(userindividual)

    } catch (error) {
        res.status(422).json(error);
    }
}


// update user data

const postupdate = async(req,res)=>{
    try {
        const {id} = req.params;

        const updateduser = await postModel.findByIdAndUpdate(id,req.body,{
            new:true
        });

        console.log(updateduser);
        res.status(201).json(updateduser);

    } catch (error) {
        res.status(422).json(error);
    }
}


// delete user
const postdelete = async(req,res)=>{
    try {
        const {id} = req.params;

        const deletuser = await postModel.findByIdAndDelete({_id:id})
        console.log(deletuser);
        res.status(201).json(deletuser);

    } catch (error) {
        res.status(422).json(error);
    }
}


module.exports = {authSignUp, authPostdata, authsignin, getallPost, getpostbyID, postupdate, postdelete, getpostbyemail, getpostsignupbyemail, getallSignup, getallBook, getallPostbycategory, getallPostbysubcategory }