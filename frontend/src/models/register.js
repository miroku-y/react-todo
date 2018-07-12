import { routerRedux } from "dva/router";
import {register} from '../services/register';
import Register from "../routes/register";

export default {
    namespace:'register',
    state:{

    },
    effects:{
        *redirect({payload},{put}){
            yield put(routerRedux.push('/login'))
        },
        *register({payload},{call,put}){
            const {success,data} = yield call(register,payload);
            if(success&&data){
                yield put(routerRedux.push('/login'))
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