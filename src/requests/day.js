import axios from "axios";
import moment from "moment";
import API_HOSPITAL from "config/api.config";
import userDetails from "utils/userDetails";

export const getDays = async () => {
  let res = await axios.get(`${API_HOSPITAL}/days/${userDetails.idCompany}`);
  return res.data;
};

export const postDays = async (data) => {
  let res = await axios.post(`${API_HOSPITAL}/days`, data);
  return res.data;
};

export const putDays = async (data, id) => {
  let res = await axios.put(`${API_HOSPITAL}/days/${id}`, data);
  return res.data;
};

export const getFreeDays = async (id) => {
  let res = await axios.get(
    `${API_HOSPITAL}/free-days/${id}/${moment().format("YYYY-MM-DD")}`
  );
  return res.data;
};
