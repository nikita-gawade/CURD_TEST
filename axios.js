const mysql=require('mysql2');
const express=require('express');
const bodyParser = require('body-parser');
const helmet=require('helmet');
const morgan=require('morgan'); 
const axios=require('axios');


var app=express();




app.use(bodyParser.json());
app.use(helmet());
app.use(morgan('tiny'));
//console.log('done');
var mysqlConnection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'my-secret-pw',
    database:'Employee',
    multipleStatements:true
   

})
mysqlConnection.connect((err)=>{
    if(!err)
    console.log('done');
    else
    console.log(JSON.stringify(err,undefined,2));
})

app.listen(3300,()=>console.log('Express server running at port 3300'));

app.get("/employee",function (req,res){
    
axios.get('http://localhost:3000/employee').then(
    function(response) {
        console.log(response);
        res.send(response.data);
    }
).catch(function(err){
    console.log(err);
})
});

app.get("/employee/:id",function (req,res){
    let{id}=req.params;
   
    var str="http://localhost:3000/employee/"+id;
    console.log(id);
axios.get(str).then(
    function(response) {
        console.log(response.data);
        res.send(res.data);
    }
).catch(function(err){
    console.log(err);
})
});

app.post("/employee",function(req,res){
let body=req.body;
axios.post("http://localhost:3000/employee",body).then
(function(response)
{
    console.log(response.data);
    res.send(response.data);
}
).catch(function(err)
{
console.log(err);
})
})






