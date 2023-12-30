import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASEURL,
  timeout: 0,
  headers: {
    "Content-Type": "application/json",
  },
  transformResponse: [
    function (data) {
      // Do whatever you want to transform the data

      return JSON.parse(data);
    },
  ],
});

const fetchApi = (method, url, data) => {
  return axiosInstance({
    method,
    url,
    data,
  });
};

const apiGet = (url, params) => {
  return axiosInstance.get(url, { params });
};

const apiPost = (url, data) => {
  return axiosInstance.post(url, data);
};

const apiPut = (url, data) => {
  return axiosInstance.put(url, data);
};

const apiDelete = (url, data) => {
  return axiosInstance.delete(url, data);
};
export default fetchApi;

export { apiGet, apiPost, apiPut, apiDelete };
