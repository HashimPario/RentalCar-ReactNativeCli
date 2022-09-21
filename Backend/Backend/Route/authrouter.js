
const express = require("express");
const router = express.Router();
const authCon = require('../Controller/index')
const authbook = require('../Controller/bookingcontroller')
const authcategory = require('../Controller/categorycontroller')
const authsubcategory = require('../Controller/subcategorycontrollers')



router.post('/signup',authCon.authSignUp)
router.post('/postdata',authCon.authPostdata)
router.post('/signin',authCon.authsignin)

router.get('/allpostdata', authCon.getallPost)
router.get('/postbyemail/:userEmail', authCon.getpostbyemail)

router.get('/postbycategory/:productName', authCon.getallPostbycategory)
router.get('/postbysubcategory/:qty', authCon.getallPostbysubcategory)

router.get('/getuser/:id', authCon.getpostbyID)

router.patch('/updateuser/:id', authCon.postupdate)
router.delete('/deletepost/:id', authCon.postdelete)

//signup

router.get('/postbyemailsignup/:email', authCon.getpostsignupbyemail)
router.get('/allsignup', authCon.getallSignup)



///booking post
router.get('/allpostbook', authCon.getallBook)

router.post('/bookingpostdata',authbook.authbookingdata)

router.get('/allbookbyemail/:userEmail', authbook.getbookbyemail)
router.get('/allbookbyemailadmin/:hotelemail', authbook.getbookbyemailadmin)

router.get('/getbookuserid/:packageid', authbook.getbookingpckid)

/// category

router.post('/allpostcategory', authcategory.authcategorydata)
router.get('/allgetcategory', authcategory.getallcategory)

/// subcategory

router.post('/allpostsubcategory', authsubcategory.authsubcategorydata)
router.get('/allgetsubcategory', authsubcategory.getallsubcategory)
router.get('/getsubcategorybyname/:categoryName', authsubcategory.getallPostbysubcategory)
router.get('/getsubcategorybysubname/:subcategoryName', authsubcategory.getallPostbysubcategory2)


module.exports = router