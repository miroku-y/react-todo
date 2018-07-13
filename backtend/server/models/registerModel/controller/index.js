const registerModel = require('../index')
const util = require('util')
//注册

const register =(ctx)=>{
    let {userName,nickName,password,copypassword}= ctx.request.body

    let registerSchema = new registerModel({
        userName:userName,
        nickName:nickName,
        password:password,
        copypassword:password
    })

    if(!userName||!nickName||!password||!copypassword){
        ctx.response.body={
            status:400,
            data:{
                message:'error',
                data:false,
                success:false
            }
        }
        return
    }
    registerSchema.save();
    ctx.response.body={
        status:200,
        data:{
            success:true,
            message:"success",
            data:true
        }
    }
}

//登录
const login = async (ctx ,next)=>{
    let {userName,password} =ctx.request.body;
    if(!userName||!password){
        ctx.response.body={
            status:200,
            data:{
                success:'error',
                message:'参数缺省'
            }
        }
        return;
    }
    let data = await new Promise((resolve,reject)=>{
        registerModel.findOne({userName:userName},(err,data)=>{
            if(!data){
            }
            if(err){
                reject(err);
            }
            resolve(data);
        })
    })
    ctx.response.body = {
        //返回用户信息
        status:200,
        data:{
            success:true,
            message:'success',
            data:data,
        }
    }
}

module.exports={
    register,
    login,
}