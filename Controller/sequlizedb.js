const Sequelize=require("sequelize");


const sequelize= new Sequelize("Squelize","root","my-secret-pw",{
dialect:"mysql",
host:"localhost",
prot:"3300"
}
);

sequelize
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch((err) => {
            console.log('Unable to connect to the database:', err);
        });

module.exports=sequelize;