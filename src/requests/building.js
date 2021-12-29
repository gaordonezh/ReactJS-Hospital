import axios from "axios";
import API_HOSPITAL from "config/api.config";
import userDetails from "utils/userDetails";

export const getBuildings = async () => {
  let res = await axios.get(`${API_HOSPITAL}/buildings/${userDetails.idCompany}`);
  return res.data;
};

export const postBuildings = async (data) => {
  let res = await axios.post(`${API_HOSPITAL}/buildings`, data);
  return res.data;
};

export const putBuildings = async (data, id) => {
  let res = await axios.put(`${API_HOSPITAL}/buildings/${id}`, data);
  return res.data;
};
