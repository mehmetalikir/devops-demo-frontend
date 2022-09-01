import axios from "axios";

export default axios.create({
  baseURL: "https://springdemobackend.azurewebsites.net/api",
  headers: {
    "Content-type": "application/json"
  }
});