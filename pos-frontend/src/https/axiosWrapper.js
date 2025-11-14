import axios from "axios";

const defaultHeader = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export const axiosWrapper = axios.create({
  baseURL: "http://restaurant-pos-backend.vercel.app",
  withCredentials: true,
  headers: { ...defaultHeader },
});
