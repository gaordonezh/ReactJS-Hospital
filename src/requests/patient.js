import axios from "axios";
import API_HOSPITAL from "config/api.config";
import userDetails from "utils/userDetails";

export const getPatients = async () => {
  let res = await axios.get(`${API_HOSPITAL}/patients/${userDetails.idCompany}`);
  return res.data;
};

export const postPatients = async (data) => {
  let res = await axios.post(`${API_HOSPITAL}/patients`, data);
  return res.data;
};

export const putPatients = async (data, id) => {
  let res = await axios.put(`${API_HOSPITAL}/patients/${id}`, data);
  return res.data;
};

export const deletePatients = async (id) => {
  let res = await axios.delete(`${API_HOSPITAL}/patients/${id}`);
  return res.data;
};
