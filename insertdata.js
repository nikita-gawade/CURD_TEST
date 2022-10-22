const mysql=require('mysql2');
const express=require('express');
const bodyParser = require('body-parser');
var app=express();
const bodyparse=require('body-parser');
app.use(bodyParser.json());

//mysql connection
var mysqlConnection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'my-secret-pw',
    database:'Employee',
    multipleStatements:true
   

})
mysqlConnection.connect((err)=>{
    if(!err)
    console.log('Connected Successfully');
    else
    console.log(JSON.stringify(err,undefined,2));
})

app.listen(3000,()=>console.log('Express server running at port 3000'));
 
app.post('/employee',(req,res)=>{
    let emp=req.body;
    var sql="SET @flag=?;SET @Name=?;SET @Age=?;SET @Email=?;SET @Contact_No=?;SET @emp_ID=?; \
    CALL Usp_Employee(@flag,@Name,@Age,@Email,@Contact_No,@emp_ID);"
    mysqlConnection.query(sql,[emp.flag,emp.Name,emp.Age,emp.Email,emp.Contact_No,emp.emp_ID],(err,rows,field)=>
    {
        if(!err)
       { res.send(rows);
        if(emp.flag==1)
        {
        console.log("Data inserted Sucessfully");
        }
        if(emp.flag==2)
        {
        console.log("EMP DATA"+ rows);
        }
        if(emp.flag==3)
        {
            console.log("Data deleted Sucessfully");
        }
        if(emp.flag==4)
        {
            console.log("Data Updated Sucessfully");
        }

       }
        if(err)
        console.log(err);
        

    })
})
