import request from '../utils/request';

export function add(params) {
  return request({url:'/api/addTodo',method:'post',data:params});
}

export function findAll(params){
  return request({url:'/api/findAll',method:'get',data:params})
}
