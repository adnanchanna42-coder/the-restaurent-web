import axios from "axios";

const defaultHeader = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export const axiosWrapper = axios.create({
  baseURL: "https://restaurant-pos-backend-seven.vercel.app",
  withCredentials: true,
  headers: { ...defaultHeader },
});
