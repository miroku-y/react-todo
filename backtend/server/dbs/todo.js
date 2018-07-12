//链接数据库
const mongoose= require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/react',{ useNewUrlParser: true });
const db=mongoose.connection;

db.on('error',()=>{
    console.log('react表连接失败！');
})

db.once('open',()=>{
    console.log('react表连接成功');
})


module.exports = mongoose;
