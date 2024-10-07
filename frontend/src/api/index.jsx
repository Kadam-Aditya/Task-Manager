import axios from "axios";

const api = axios.create({
  baseURL: "https://task-manager-backend-0fvy.onrender.com/api",
});
export default api;
