import axios from "axios";

const api = axios.create({
  baseURL: "https://ai-investment-research-agent-1-knxd.onrender.com",
});

export default api;