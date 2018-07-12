const mongoose= require('../../dbs/todo');
const todoSchema=mongoose.Schema;

//设置todo的列表规则
const Schema=new todoSchema({
    date:String,
    message:String,
},{collection:'react'})

module.exports=mongoose.model('React',Schema)