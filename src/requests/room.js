import axios from "axios";
import API_HOSPITAL from "config/api.config";
import userDetails from "utils/userDetails";

export const getRooms = async () => {
  let res = await axios.get(`${API_HOSPITAL}/rooms/${userDetails.idCompany}`);
  return res.data;
};

export const postRooms = async (data) => {
  let res = await axios.post(`${API_HOSPITAL}/rooms`, data);
  return res.data;
};

export const putRooms = async (data, id) => {
  let res = await axios.put(`${API_HOSPITAL}/rooms/${id}`, data);
  return res.data;
};

export const getRoomByLevel = async (idLevel) => {
  let res = await axios.get(`${API_HOSPITAL}/rooms/${idLevel}/${userDetails.idCompany}`);
  return res.data;
};
