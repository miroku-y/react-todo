import axios from "axios";
import { message as antdMessage } from "antd";

const fetch = options => {
  let { method = "get", data } = options;

  options.method = method.toLowerCase();

  if (true) {
    options.params = data;
    delete options.data;
  }
  if (options.method === "post") {
    options.data = { ...data };
    delete options.params;
    let obj=options.data;
    // options.data={}
    // options.data.params=obj;
    // options.data.params=JSON.stringify(obj);
  }
  return axios(options);
};

export default function request({ catch: _catch, ...options }) {
  return fetch(options)
    .then(response => {
      console.log(response,'0000000');
      let { statusText, status, data: { code, message, data } } = response;
      const meta = Array.isArray(data)
        ? {
            list: data,
          }
        : data;
      if (code !== 0) {
        return Promise.resolve({
          success: false,
          msg: message || statusText,
          code: code || status,
          data,
          ...meta,
        });
      }
      return Promise.resolve({
        success: true,
        msg: message || statusText,
        code: code,
        data,
        ...meta,
      });
    })
    .catch(
      _catch ||
        (error => {
          const { response } = error;
          let msg;
          let code;
          if (response && response instanceof Object) {
            const { data, statusText, status } = response;
            code = data.code || status;
            msg = data.message || statusText;
          } else {
            code = 600;
            msg = error.message || "Network Error";
          }
          return Promise.reject({ success: false, code, msg });
        })
    );
}
