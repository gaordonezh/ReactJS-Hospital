import axios from "axios";
import API_HOSPITAL from "config/api.config";
import userDetails from "utils/userDetails";

export const getQuotes = async () => {
  let res = await axios.get(`${API_HOSPITAL}/quotes/${userDetails.idCompany}`);
  return res.data;
};

export const getQuoteByUser = async (patient) => {
  let res = await axios.get(`${API_HOSPITAL}/quotes/user/${patient}`);
  return res.data;
};

export const postQuotes = async (data) => {
  let res = await axios.post(`${API_HOSPITAL}/quotes`, data);
  return res.data;
};

export const putQuotes = async (data, id) => {
  let res = await axios.put(`${API_HOSPITAL}/quotes/${id}`, data);
  return res.data;
};
