const mongoose= require('mongoose');
const Schema =mongoose.Schema;



const Employee_sch=new Schema(
    {
        Name:{
            type:String,
            required: true
        },
        Age:{
            type:String
            
        },
        Contact_no:{
            type:String
        },
        Email:{
            type:String
        },
        Active:{
            type:String
        }

    },{timestamps:true}
);

const Employee=mongoose.model('Employee',Employee_sch);

module.exports=Employee;