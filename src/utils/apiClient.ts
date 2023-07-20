import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import ApiConfig from "../config/api-config";

const config: AxiosRequestConfig = {
  // baseURL: ApiConfig.BASE_URL,
  headers: {
    // "Content-Type":
    //   "application/json;multipart/form-data;application/x-www-form-urlencoded;charset=utf-8",
      Accept: "application/json",
    "Content-Type": "application/json;charset=utf-8",
  },
};

const $apiClient: AxiosInstance = axios.create(config);

export { $apiClient };
