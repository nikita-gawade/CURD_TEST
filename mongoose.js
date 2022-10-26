const mysql=require('mysql2');
const express=require('express');
const bodyParser = require('body-parser');
const helmet=require('helmet');
const morgan=require('morgan'); 
const axios=require('axios');
const mongoose =require('mongoose');
const Employee=require('./models/Employee');



var app=express();


app.use(bodyParser.json());
app.use(helmet());
app.use(morgan('tiny'));
//console.log('done');



var dburl="mongodb+srv://nikita_gawade:Nikita08@nodetest.ymfag5r.mongodb.net/Employee?retryWrites=true&w=majority"
mongoose.connect(dburl,{useNewUrlParser:true,useUnifiedTopology:true})
.then((result)=>
{
//console.log("Connected to mongodb");
app.listen(3000,()=>console.log('Express server running at port 3000'));

}).catch((err)=>
{
console.log(err);

})

app.get("/add-employee",(req,res)=>
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


app.get("/all-emp",(req,res)=>
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

app.get("/emp-details",(req,res)=>
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



app.get("/emp-delete",(req,res)=>
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



app.get("/emp-update",(req,res)=>
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