import axios from "axios";
import API_HOSPITAL from "config/api.config";

export const getCompanies = async () => {
  let res = await axios.get(`${API_HOSPITAL}/companies`);
  return res.data;
};

export const postCompanies = async (data) => {
  let res = await axios.post(`${API_HOSPITAL}/companies`, data);
  return res.data;
};

export const putCompanies = async (data, id) => {
  let res = await axios.put(`${API_HOSPITAL}/companies/${id}`, data);
  return res.data;
};
