
const Customer =require("../models/Customer");
const Order=require("../models/Order");
const express=require("express");
const sequlefun=require("../Controller/sequelizecontroller")
const app=express();
const bodyParser = require('body-parser');


const router=express.Router();

router.get("/add-cut",sequlefun.addcust);

router.get("/get-cut",sequlefun.getcust);

module.exports=router;
