import axios from "axios";
import { API_URL } from "../config/config";

axios.defaults.withCredentials = true;

export const fetchCourses = async () => {
  return axios
    .get(`${API_URL}/api/v1/courses`)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      console.log(e);
    });
};
