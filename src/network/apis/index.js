import axios from 'common/src/network/apis/index';

axios.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  const configToUpdate = config;

  if (token) {
    console.log('outer token from inner app while api call: ', token);
    console.log(config.method, ' ', config.url);
    // disabled to avoid CORS
    // configToUpdate.headers.common['X-Auth'] = token;
  }
  return configToUpdate;
});

axios.interceptors.response.use(
  response => response.data,
  error => Promise.reject({ ...error }),
);

const  api = {
  apiExampleRequest: () => {
    return axios.get(`/stubData/testData.json`);
  },
  // can be implemented for standalone app
  // getToken: () => {
  //   return axios.get(`/stubData/token.json`);
  // },
};

export default api
