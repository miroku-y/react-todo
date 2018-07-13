
import {add,findAll,singleDelete} from '../services/todo'
import {message} from 'antd'

export default {

  namespace: 'todo',

  state: {
    list:[],
    visible:false,
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      history.listen(({pathname})=>{
        if(pathname=='/todo'){
          dispatch({
            type:'todoList',
            payload:{
              
            }
          })
        }
      })
    },
  },

  effects: {
    *todoList({payload},{call,put}){
      const {message,data,success} = yield call(findAll,payload);
      
      if(success){
        yield put({
          type:'saveList',
          payload:{
            list:data,
          }
        })
      }
    },
    *addTodo({ payload }, { call, put }) {  // eslint-disable-line
      
      const {success,status} = yield call(add,payload);
      if(success){
        return success;
      }
    },
    *delete({payload},{call,put,select}){
      const {success}=yield call(singleDelete,payload);
      if(success){
        message.success('删除成功')
      }else{
        message.error('失败')
      }
        return success;
    }
  },

  reducers: {
    visibleAction(state, action) {
      return { ...state, visible:!state.visible };
    },
    saveList(state,{payload}){
      const {list} = payload
      return {
        ...state,
        list,
      }
    }
  },

};
