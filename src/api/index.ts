import axios from "axios";

const myAxios = axios.create({
  baseURL: "/api",
  timeout: 5000,

  headers: {
    // "Content-Type": "application/json",
  },
});
myAxios.interceptors.request.use(
  (config) => {
    // 处理请求数据

    return config;
  },
  (error) => {
    // 处理请求错误

    return Promise.reject(error);
  }
);

myAxios.interceptors.response.use(
  (response) => {
    // 处理响应数据
    // console.log(response);
    return response.data.data;
  },
  (error) => {
    // 处理响应错误

    return Promise.reject(error);
  }
);
export default myAxios;
