import axios from "axios";
import { API_URL } from "../config/config";

export const generateToken = async (data: Object) => {
  return axios
    .post(`${API_URL}/api/v1/token`, { ...data }, { withCredentials: true })
    .then((res) => {
      return res;
    })
    .catch((e) => {
      console.log(e);
      return e.response;
    });
};
