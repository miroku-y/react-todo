import dva from 'dva';
import {message} from 'antd'
import './index.css';
import createLoading from "dva-loading";
import createHistory from "history/createBrowserHistory";
import _ from 'lodash'


// 1. Initialize
// const app = dva();
const app = (window.app = dva({
  ...createLoading({
    effects: true,
  }),
  history: createHistory(),
  onError: error => {
    if (_.isObject(error)) {
      error = error.msg || error.message;
    }
    message.error(error);
  },
}));


// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/app').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
