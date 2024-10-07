import axios from "axios";

const api = axios.create({
  baseURL: "https://task-manager-backend-0fvy.onrender.com",
});
export default api;
