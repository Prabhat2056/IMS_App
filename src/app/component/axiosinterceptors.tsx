// import React from 'react'

// const axiosinterceptors = () => {
//   return (
//     <div>axiosinterceptors</div>
//   )
// }

// export default axiosinterceptors

import axios from "axios";

const instance = axios.create();
const token =
" Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImZpcnN0X25hbWUiOiJwcmFiaW4iLCJtaWRkbGVfbmFtZSI6IiIsImxhc3RfbmFtZSI6ImJoYXR0YXJhaSIsImVtYWlsIjoicHJhYmluMTIzM0BnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRnSUNYeUVxUGV3azNyQng1eFV5YkMuQ1NnS2M0NE5WZjBEMXBYRzVHelY0N0xRdkpmR3RaMiIsInJvbGVfaWQiOjIsImNyZWF0ZWRfYXQiOiIyMDI0LTA3LTMxVDA2OjMxOjUxLjY0MloiLCJ1cGRhdGVkX2F0IjoiMjAyNC0wNy0zMVQwNjozMTo1MS42NDJaIiwiaWF0IjoxNzIyNDA3NTY3fQ.lW3BdpJgQYxj9GvCh095UMMtk6t-eR6uQ6-C_2in58s";
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    console.log(config)
    config.headers.Authorization = token;
    config.headers["Content-Type"] = "Application/json"
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    // Do something before request is sent
    console.log(response)
    // const { status, data } = response
    return response;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export { instance };