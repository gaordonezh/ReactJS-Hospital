import axios from "axios";
import API_HOSPITAL from "config/api.config";
import userDetails from "utils/userDetails";

export const getSchedules = async () => {
  let res = await axios.get(`${API_HOSPITAL}/schedules/${userDetails.idCompany}`);
  return res.data;
};

export const postSchedules = async (data) => {
  let res = await axios.post(`${API_HOSPITAL}/schedules`, data);
  return res.data;
};

export const putSchedules = async (data, id) => {
  let res = await axios.put(`${API_HOSPITAL}/schedules/${id}`, data);
  return res.data;
};
