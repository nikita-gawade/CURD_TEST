
const express=require('express');
const bodyParser = require('body-parser');

const axios=require('axios');

const Employee=require('../models/Employee');



var route=express.Router();


route.use(bodyParser.json());


route.get("/add-employee",(req,res)=>
{
const emp=new Employee(
    {
        Name:'Nikita',
        Age:'23',
        Contact_No:'823223232',
        Email:'nikitagawade08@gmail.com',
        Active:'1'
    }
);
emp.save().then((result)=>
{
    res.send(result);
}).catch((err)=>
{
    console.log(err);
});
});


route.get("/all-emp",(req,res)=>
{
    Employee.find().then((result)=>
    {
            //console.log(result);
            res.send(result);
    }).catch((er)=>
    {
        console.log(er);
    })
    
});

route.get("/emp-details",(req,res)=>
{
Employee.findById("635819b3cd40e8bf85837d61").then((result)=>
{
console.log(result);
res.send(result);
}).catch((err)=>
{
    console.log(err);
})
});



route.get("/emp-delete",(req,res)=>
{
    Employee.deleteMany({Name:"Nikita"}).then((result)=>
{
console.log(result);
res.send(result);
}).catch((err)=>
{
    console.log(err);
})
});



route.get("/emp-update",(req,res)=>
{
    Employee.updateOne({Name:"Nikita"},{Name:"Ankita"}).then((result)=>
{
console.log(result);
res.send(result);
}).catch((err)=>
{
    console.log(err);
})
});




route.post("/add-employee",(req,res)=>
{
    const empreq=req.body;
const emp=new Employee(
    {
        Name:empreq.Name,
        Age:empreq.Age,
        Contact_No:empreq.Contact_No,
        Email:empreq.Email,
        Active:empreq.Active
    }
);
emp.save().then((result)=>
{
    res.send(result);
    console.log("Data Added Successfully");
}).catch((err)=>
{
    console.log(err);
});
});



route.put("/emp-update",(req,res)=>
{
    const empdata=req.body;
    Employee.updateOne({Name:empdata[0].Name},{Name:empdata[1].Name}).then((result)=>
{
console.log(result);
res.send(result);
}).catch((err)=>
{
    console.log(err);
})
});

module.exports=route;