const Sequelize=require("./Controller/sequlizedb");
const Customer =require("./models/Customer");
const Order=require("./models/Order");
const express=require("express");
const sequlefun=require("./Controller/sequelizecontroller")
const app=express();
const bodyParser = require('body-parser');
const squiliteroute=require('./routes/Sequlizeroutes');

app.use(bodyParser.json());
app.listen("3300",()=>{
    console.log("listning to 3300");
})

app.use(squiliteroute);



