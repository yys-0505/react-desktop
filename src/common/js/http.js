import axios from 'axios';
import { modalError } from './utils';
import store from '../../store';
import { showLoadingAction, hideLoadingAction } from '../../store/actions/page';
import * as urls from './urls';

axios.defaults.baseURL = urls.fixedPath;//每次请求都会带一个 /data前缀
axios.defaults.timeout = 30000;
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
// axios.defaults.proxy = {
//   host: urls.domain,
//   port: urls.port
// };

axios.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

let http = {};
http.get = (path, params) => {
  return new Promise((resolve, reject) => {
    store.dispatch(showLoadingAction());
    axios.get(path, params).then(res => {
      store.dispatch(hideLoadingAction());
      if (res.status === 200) {
        resolve(res.data)
      } else {
        modalError(res);
        reject(res)
      }
    }).catch(err => {
      store.dispatch(hideLoadingAction());
      modalError(err.message);
      reject(err);
    })
  })
};

http.post = (path, params = {}, config = {}) => {
  return new Promise((resolve, reject) => {
    store.dispatch(showLoadingAction());
    axios.post(path, params, config).then(res => {
      store.dispatch(hideLoadingAction());
      if (res.status === 200) {
        resolve(res.data)
      } else {
        modalError(res.statusText);
        reject(res)
      }
    }).catch(err => {
      store.dispatch(hideLoadingAction());
      modalError(err.response.statusText);
      reject(err);
    })
  })
};

export default http;