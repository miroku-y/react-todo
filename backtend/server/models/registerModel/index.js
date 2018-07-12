const mongoose = require('../../dbs/register');
const Schema = mongoose.Schema;

const registerSchema = new Schema({
    userName:String,
    nickName:String,
    password:String,
    copypassword:String,
},{collection:'register'})


module.exports=mongoose.model('Register',registerSchema)
