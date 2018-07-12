import request from "../utils/request";

export function register(params){
    return request({url:'/api/register',method:'post',data:params})
}