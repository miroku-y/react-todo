import React from 'react';
import {Route,Switch,Redirect,routerRedux} from 'dva/router';
import {LocaleProvider} from 'antd';
import App from './routes/App';

import dynamic from 'dva/dynamic';
import zhCN from 'antd/lib/locale-provider/zh_CN'

const {ConnectedRouter} = routerRedux;

const Routers = function({history,app}){
  const routes = [
    {
      path:'/login',
      models:()=>[import("./models/login")],
      component:()=>import("./routes/login")
    },
    {
      path:'/register',
      models:()=>[import("./models/register")],
      component:()=>import("./routes/register")
    },
    {
      path:'/todo',
      models:()=>[import("./models/todo")],
      component:()=>import("./routes/todo")
    },
  ]

  return <ConnectedRouter history={history}>
    <LocaleProvider locale={zhCN}>
      <App>
        <Switch>
          <Route exact path="/" render={()=><Redirect to="/login"/>}/>
          {
            routes.map(({path,...dynamics},key)=>(
              <Route
                key={key}
                exact
                path={path}
                component={dynamic({
                  app,
                  ...dynamics,
                })}
              />
            ))
          }
        </Switch>
      </App>
    </LocaleProvider>
  </ConnectedRouter>
}

export default Routers;
