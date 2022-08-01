import axios from "axios";
import { apiUrl } from "../constants /constants";

const $api = axios.create({
  withCredentials: true,
  baseURL: apiUrl,
  // headers: {
  //   "Content-Type": "application/json",
  // },
});

$api.interceptors.request.use((config) => {
  if (config.headers === undefined) {
    config.headers = {};
  }
  //           !
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

export default $api;
