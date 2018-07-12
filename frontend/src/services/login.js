import request from '../utils/request';

export function login(params){
    return request({url:'/api/login',method:'post',data:params
})
}