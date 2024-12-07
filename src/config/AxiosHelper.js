import axios from "axios";
export const baseURL = "https://chatapp-production-ba15.up.railway.app";
export const httpClient = axios.create({
  baseURL: baseURL,
});
