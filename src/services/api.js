import axios from "axios";

axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

const api = axios.create({
  baseURL: "http://localhost:8080/",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
});

api.interceptors.response.use((response) => response.data._embedded);

export default api;
