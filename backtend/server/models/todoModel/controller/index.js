const todoModel = require('../index')


//获取todoList
const findAll = async (ctx) => {
  console.log(ctx,'iiiiii')
	let data = await new Promise((resolve, reject) => {
		todoModel.find({}, (err, data) => {
			if (err) {
				reject(err)
			}
			resolve(data)
		})
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

module.exports = {
  add,
  findId,
  findAll,
}
