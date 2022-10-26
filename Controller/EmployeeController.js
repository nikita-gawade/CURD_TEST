const Employee=require('../models/Employee');


const addempdata=(req,res)=>
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
    }).catch((err)=>
    {
        console.log(err);
    });
}


const getempdata=(req,res)=>
{
    Employee.find().then((result)=>
    {
            //console.log(result);
            res.send(result);
    }).catch((er)=>
    {
        console.log(er);
    })
}

const getempdetails=(req,res)=>
{
    Employee.findById("635819b3cd40e8bf85837d61").then((result)=>
{
console.log(result);
res.send(result);
}).catch((err)=>
{
    console.log(err);
})
}

const updateemp=(req,res)=>
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
}

const deleteemp=(req,res)=>
{
    Employee.deleteMany({Name:"Nikita"}).then((result)=>
    {
    console.log(result);
    res.send(result);
    }).catch((err)=>
    {
        console.log(err);
    })
}

module.exports={
    addempdata,
    getempdata,
    getempdetails,
    updateemp,
    deleteemp
}