import axios from "axios";

const API = axios.create({
  baseURL: "https://asset-sb-2.onrender.com"
});

export default API;