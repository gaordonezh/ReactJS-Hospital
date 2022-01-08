import axios from "axios";
import API_HOSPITAL from "config/api.config";

export const getMaintenances = async (equipment) => {
  let res = await axios.get(`${API_HOSPITAL}/maintenances/${equipment}`);
  return res.data;
};

export const postMaintenances = async (data) => {
  let res = await axios.post(`${API_HOSPITAL}/maintenances`, data);
  return res.data;
};

export const putMaintenances = async (data, id) => {
  let res = await axios.put(`${API_HOSPITAL}/maintenances/${id}`, data);
  return res.data;
};
