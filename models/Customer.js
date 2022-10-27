const Sequelize=require("sequelize");
const sequelize=require("../Controller/sequlizedb");

const bodyParser = require('body-parser');
const Customer=sequelize.define("Customer",
{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false
    }
}


);

module.exports=Customer;