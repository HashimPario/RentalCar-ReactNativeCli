///booking add data
const categoryModel = require('../Model/categorySchema')

const authcategorydata = (req, res)=>{
    
    

    let categorypostCreate = new categoryModel({

        categoryName: req.body.categoryName, 
        imageURL: req.body.imageURL,
        userEmail: req.body.userEmail,
        hotelname: req.body.hotelname,


    })
    
    categorypostCreate.save()
    .then((response)=>{
        console.log(`response success`)

        res.status(200).send({result: response, Message: "Category Data Successfully"})

        console.log(categorypostCreate)

    }).catch((err)=>{
        res.status(400).send({result: err, Message: "Category Data Not Successfully"})
    })

}


//get all category data

const getallcategory = async(req, res)=>{
    const allgetcategory = await categoryModel.find();
    res.json(allgetcategory);

}



module.exports = {authcategorydata, getallcategory}