const db= require("../utils/database")
const Users=require("./users.model")
//Tipos de datos de sequelize
//varchar=> string

const {DataTypes}=require("sequelize")


const Task=db.define("task",{
id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    autoIncrement:true,
    primaryKey:true,
},
title:{
    type:DataTypes.STRING,
    allowNull:false,
},
description:{
    type:DataTypes.STRING,
},
isComplete:{
    type:DataTypes.BOOLEAN,
    defaultValue:false,
    field:"is_complete",
},
userId:{
type:DataTypes.INTEGER,
allowNull:false,
field:"user_id",
references:{
    model:Users,
    key:"id",
},
}
})

module.exports=Task;