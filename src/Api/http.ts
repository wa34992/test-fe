import axios from "axios";
import { BASE_URL } from "../config";
// const API_ROOT = process.env.REACT_APP_API_URL;
const API_ROOT = BASE_URL

axios.defaults.baseURL = API_ROOT;
axios.defaults.timeout = 120000;




export var loginToken = "";

// localForage.getItem("persist:login").then((value) => {
//   if (value) {
//     const authResponse = JSON.parse(JSON.parse(value)?.authResponse);
//     if (authResponse && Object.keys(authResponse).length) {
//       const Token = authResponse?.data?.token;
//       loginToken = Token;
//       http.setAuthorizationHeader(Token);
//     } else {
//       axios.interceptors.request.use(
//         (config) => config,
//         (error) => Promise.reject(error)
//       );
//     }
//   }
// });

axios.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error.response || error.request || error.message)
);

console.log("Being Called")

const http = {
  setAuthorizationHeader(accessToken: string) {
    console.log("accessTokenaccessTokenaccessToken", accessToken);

    axios.defaults.headers.common["Authorization"] = "Bearer " + accessToken;
    axios.defaults.headers.Authorization = "Bearer " + accessToken;
  },
  request(config = {}) {
    return axios.request(config);
  },
  get(url: string, config = {}) {
    return axios.get(url, config);
  },
  post(url: string, data = {}, config = {}) {
    return axios.post(url, data, config);
  },
  put(url: string, data = {}, config = {}) {
    return axios.put(url, data, config);
  },
  patch(url: string, data = {}, config = {}) {
    return axios.patch(url, data, config);
  },
  delete(url: string, config = {}) {
    return axios.delete(url, config);
  },
  pageSize: 999999,
};

export default http;