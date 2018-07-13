const todoModel = require('../index')


//获取todoList
const findAll = async (ctx) => {
	let data = await new Promise((resolve, reject) => {
		todoModel.find({}, (err, data) => {
			if (err) {
				reject(err)
			}
			resolve(data)
		}).sort({'_id':-1})
	})
	ctx.response.body = {
    status: 200,
    data:{
      code:0,
      success:true,
      message:'success',
      data:data
    }
	}
}
//新增
const add = (ctx) => {
    let {date,message} = ctx.request.body

  let addTodo = new todoModel({
    date:date,
    message:message,
  })
  if (!date || !message) {
    ctx.response.body = {
      status: 400,
      success: false
    }
    return;
  }
  addTodo.save();
  ctx.response.body = {
    status: 200,
    data:{
      success: true,
      message:'success',
      data:true
    }
  }
}

//查询某一个
const findId = async (ctx) => {
  let {
    id
  } = ctx.request.body;

}

//删除
const singleDelete = async (ctx) =>{
  let{_id} = ctx.request.body;
  console.log(_id,'dddd')

  let data = new Promise((resolve,reject)=>{
    todoModel.remove({_id},(err,data)=>{
      if(err){
        reject(err)
      }
      resolve(data)
    })
  })
  if(data){
    ctx.response.body={
      status:200,
      data:{
        success:true,
        data:true
      }
    }
  }else{
    ctx.response.body={
      status:400,
      data:{
        success:false,
        data:false
      }
    }
  }
}

module.exports = {
  add,
  findId,
  findAll,
  singleDelete
}
