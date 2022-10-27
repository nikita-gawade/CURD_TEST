const Sequelize=require("sequelize");
const sequelize=require("../Controller/sequlizedb");


const Order=sequelize.define("Order",{

    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    Total:{
        type:Sequelize.FLOAT,
        allowNull:false
    }

}
   );


   module.exports=Order;