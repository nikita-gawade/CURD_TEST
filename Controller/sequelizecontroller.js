const Sequelize=require("sequelize");
const Customer =require("../models/Customer");
const Order=require("../models/Order");
const sequlizedb=require("./sequlizedb");


Customer.hasMany(Order);

const addcust=(req,res)=>
{
    const cutparm=req.body;
    sequlizedb.sync().then((result)=>
{
    return Customer.create({
        "name":cutparm.Name,
        "email":cutparm.Email
    })
//console.log(result);


}).then((Cutomerres)=>
{
   //accessing response return from the create cutomer
    Cutomerres.createOrder({
        Total:45
    });
    console.log("Data Added Successfully");
    res.send(Cutomerres);
}).catch((err)=>
{
console.log(err);
})
}

const getcust=(req,res)=>
{   
    const cutparm=req.body;
    let id=cutparm.id;
    sequlizedb.sync().then((result)=>
{
    
    console.log(Customer.findAll({where :id}).then((resulteall)=>
    {
        res.send(resulteall);
        
    }));
    

}).then((Cutomerres)=>
{
   //accessing response return from the create cutomer
   
}).catch((err)=>
{
console.log(err);
})
}

module.exports={
    addcust,
    getcust
}

