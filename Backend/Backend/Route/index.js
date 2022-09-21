const express = require("express");
const router = express.Router();
const authRoutes = require('./authRouter')


router.use('/api',authRoutes)



module.exports = router