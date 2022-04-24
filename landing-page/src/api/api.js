import axios from "axios";

const API = axios.create({
  baseURL: `https://meals-cb975-default-rtdb.firebaseio.com/`,
});

export default API;