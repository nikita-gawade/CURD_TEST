const mysql=require('mysql2');
const express=require('express');
const bodyParser = require('body-parser');
const helmet=require('helmet');
const morgan=require('morgan'); 
const axios=require('axios');
const emprouts=require('./routes/mongoosedb');
const mongoose =require('mongoose');

var app=express();

app.use(emprouts);
app.use(bodyParser.json());
app.use(helmet());
app.use(morgan('tiny'));





var dburl="mongodb+srv://nikita_gawade:Nikita08@nodetest.ymfag5r.mongodb.net/Employee?retryWrites=true&w=majority"
mongoose.connect(dburl,{useNewUrlParser:true,useUnifiedTopology:true})
.then((result)=>
{
//console.log("Connected to mongodb");
app.listen(3300,()=>console.log('Express server running at port 3300'));

}).catch((err)=>
{
console.log(err);

})


