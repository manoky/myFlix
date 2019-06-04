import axios from 'axios';

const cache = new Map();
const cacheRequest = (key, value) => cache.set(key, {value, expire: Date.now() + 400000 });
const find= (key) => cache.get(key);


const apiFetch = () => next => action => {
  if(action.api) {

    if(!action.method || action.method ==='GET') {
      const cacheResponse = find(action.remote);
      const now = Date.now();

      if(cacheResponse && cacheResponse.expire > now) {
        next({
          type: action.type,
          resp: cached,
          cached: true,
        });
        return new Promise(resolve => resolve(cacheResponse.value))
      }
    }

    return axios({
      method: action.method || 'GET',
      url: `/api/v1/${action.api}`,
      data: action.data,
    })
    .then(res => {
      const data = res.data
      if(!action.method || action.method === 'GET') {
        cacheRequest(action.api, data);
      }
      return data;
    })
    .then(data => next({ type: `${action.type}_SUCCESS`, data }))
    .catch(err => next({type: `${action.type}_FAILURE`, err}))
  }
  return next(action);
}

export default apiFetch;