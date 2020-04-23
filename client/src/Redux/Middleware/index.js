import cookies from 'js-cookies'
const promiseMiddleware = () => {
  return next => action => {
    const { promise, type, token, ...rest } = action

    if (!promise) return next(action)

    const SUCCESS = type + '_SUCCESS'
    const REQUEST = type + '_REQUEST'
    const FAILURE = type + '_FAILURE'
    next({ ...rest, type: REQUEST })
    return promise
      .then(async response => {
          if(response.status.toString().indexOf('20') === 0) {
            const newResp = await response.json();
            return { ...newResp, status: response.status }
        }
        const newResp = await response.json();
        return Promise.reject({ ...newResp, status: response.status })
        })
      .then(response => {
        next({ ...rest, response: response, type: SUCCESS })
        if (token) {
          const secure = window.location.protocol === 'https'
          cookies.setItem(
            'API_TOKEN',
            response.data.token,
            undefined,
            '/',
            undefined,
            secure
          )
        }
        return Promise.resolve(response);
      })
      .catch(error => {
          console.log("error",error)
        next({ ...rest, error, type: FAILURE })
        if (error.status && error.status.code === 401) {
          cookies.remove('API_TOKEN')
        }
        return Promise.reject(error);
      })
  }
}
export default promiseMiddleware
