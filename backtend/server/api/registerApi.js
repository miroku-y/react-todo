const Router = require('koa-router');

const router = new Router();
const registers = require('../models/registerModel/controller');

//新增注册
router.post('/register',registers.register);
//登录
router.post('/login',registers.login)

module.exports = router;