import { routerRedux } from "dva/router";
import {login} from '../services/login';
import {message} from 'antd'

export default {
    namespace:'login',
    state:{

    },
    effects:{
        *redirect({payload},{put}){
            yield put(routerRedux.push('/register'))
        },
        *login({payload},{call,put}){
            const {success,data} = yield call(login,payload);
            if(success&&data){
                yield put (routerRedux.push('/todo'))
            }else{
                message.error('该用户尚未注册')
            }
        }
    },
    reducers:{

    },
    subscriptions:{
        setup(){

        }
    }
}