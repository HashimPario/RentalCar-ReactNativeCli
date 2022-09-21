const express = require('express');
const mongoose = require('./Config/config')
const mainRouter = require('./Route/index')


const port = 9000;
const app = express()
const cors = require("cors");
const bd = require("body-parser")
// const urlParser = express.json();

app.use(cors());

app.use(
    bd.urlencoded({
      extended: false,
    })
  );
  app.use(bd.json());
// app.use(urlParser);
app.use(mainRouter)




app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})