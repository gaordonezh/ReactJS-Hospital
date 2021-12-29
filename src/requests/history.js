import axios from "axios";
import API_HOSPITAL from "config/api.config";
import userDetails from "utils/userDetails";

export const getHistories = async () => {
  let res = await axios.get(`${API_HOSPITAL}/histories/${userDetails.idCompany}`);
  return res.data;
};

export const postHistories = async (data) => {
  let res = await axios.post(`${API_HOSPITAL}/histories`, data);
  return res.data;
};
