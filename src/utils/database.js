
const {Sequelize}=require("sequelize")


//crear una instancia con parametros de configuracion de nuestra base de datos
//objeto de configuracion -> 
const db= new Sequelize({
    database:"todoapp",
    username:"postgres",
    host:"localhost",
    port:"5432",
    password:"bryan12345",
    dialect:"postgres"//la base de datos que estamos usando
})


module.exports=db;