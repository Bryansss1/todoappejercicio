const db= require("../utils/database")
const Categorys=require("./categorys.model")
const Task=require("./task.model")
//Tipos de datos de sequelize
//varchar=> string

const {DataTypes}=require("sequelize")

const Taskcategories=db.define("task_categories",{
    id:{
        primaryKey:true,
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        unique:true,
    },
    categoryId:{
        type:DataTypes.INTEGER,
        field:"category_id",
        allowNull:false,
        references:{
            model:Categorys,
            key:"id",
        }
    },
    taskId:{
        allowNull:false,
        type:DataTypes.INTEGER,
        field:"task_id",
        references:{
            model:Task,
            key:"id",
        }
    }
},
{
    timestamps:false,
})

module.exports=Taskcategories;