import { baseURL } from "@shared/constants/endpoints";
import axios from "axios";
import axiosRetry from "axios-retry";

const consumerApi = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

/**
 * Retries request if failed, check options: https://www.npmjs.com/package/axios-retry#options
 */
axiosRetry(consumerApi, { retries: 0 });

export default consumerApi;
