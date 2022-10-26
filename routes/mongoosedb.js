const express=require('express');
const bodyParser = require('body-parser');
const emp_controller=require('../Controller/EmployeeController')
const axios=require('axios');

var route=express.Router();

route.use(bodyParser.json());

route.post("/add-employee",emp_controller.addempdata);
route.get("/all-emp",emp_controller.getempdata);
route.get("/emp-details",emp_controller.getempdetails);
route.get("/emp-delete",emp_controller.deleteemp);
route.put("/emp-update",emp_controller.updateemp);


module.exports=route;