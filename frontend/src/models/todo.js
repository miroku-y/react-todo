
import {add,findAll} from '../services/todo'

export default {

  namespace: 'todo',

  state: {
    list:[],
    visible:false,
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      history.listen(({pathname})=>{
        console.log(history);
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
      console.log(success,status);
      if(success){
        return success;
      }
    },
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
