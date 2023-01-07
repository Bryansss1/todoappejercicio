
const db= require("../utils/database")

//Tipos de datos de sequelize
//varchar=> string

const {DataTypes}=require("sequelize")



const Categorys=db.define("categorys",{

    id:{
        primaryKey:true,
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        unique:true,
    },
    name:{
        type:DataTypes.STRING,
        unique:true
    },
},{
    timestamps:false,
})

module.exports=Categorys;