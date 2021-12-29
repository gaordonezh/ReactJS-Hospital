import axios from "axios";
import API_HOSPITAL from "config/api.config";
import userDetails from "utils/userDetails";

export const getLevels = async () => {
  let res = await axios.get(`${API_HOSPITAL}/levels/${userDetails.idCompany}`);
  return res.data;
};

export const getLevelsByBuilding = async (idBuilding) => {
  let res = await axios.get(`${API_HOSPITAL}/levels/${idBuilding}/${userDetails.idCompany}`);
  return res.data;
};

export const postLevels = async (data) => {
  let res = await axios.post(`${API_HOSPITAL}/levels`, data);
  return res.data;
};

export const putLevels = async (data, id) => {
  let res = await axios.put(`${API_HOSPITAL}/levels/${id}`, data);
  return res.data;
};
