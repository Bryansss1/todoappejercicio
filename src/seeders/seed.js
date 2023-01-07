const db =require("../utils/database")
const Users=require("../models/users.model")
const Task=require("../models/task.model")


const users=[
    {username:"bryan",email:"bryan@gmail.com",password:"1234",},//id 1
    {username:"lucero",email:"lucero@gmail.com",password:"1234",},//id 2
    {username:"jhorman",email:"jhorman@gmail.com",password:"1234",},//id 3
];
const tasks=[
{title:"Tarea1",description:"Descripcion tarea 1",userId:1,},
{title:"Tarea2",description:"Descripcion tarea 2",userId:1,},
{title:"Tarea3",userId:2,},
{title:"Tarea4",description:"Dshalala1",userId:3},
];
const categories=[

];
const TaskCategories=[

];


db.sync({force:true})
.then(()=>{
    console.log("Iniciando con el sembradio malisioso")
    users.forEach((user)=>Users.create(user));//insertando 1 por 1
    //
    setTimeout(()=>{
        tasks.forEach((task)=>Task.create(task))
    },1000)
})
.catch((error)=>console.log(error))

//create insertar info en la tabla    tabla.create(info al insertar ejemplo un objeto {user})
//FindOne,findAll igual al select * from tabla name,  findByPk
//update
//destroy