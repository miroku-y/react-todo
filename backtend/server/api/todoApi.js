const Router = require('koa-router');
const router = new Router();
const todos=require('../models/todoModel/controller')


//增加
router.post('/addTodo',todos.add)
//查询
router.get('/findAll',todos.findAll)
//删除
router.post('/delete',todos.singleDelete)

module.exports=router;