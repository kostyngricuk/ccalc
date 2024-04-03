import axios from "axios";

export default axios.create({
  withCredentials: true,
  baseURL: "http://localhost:5000/api",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-type": "application/json",
    "Accept": "application/json",
  }
});