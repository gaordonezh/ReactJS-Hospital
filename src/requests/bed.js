import axios from "axios";
import API_HOSPITAL from "config/api.config";
import userDetails from "utils/userDetails";

export const getBeds = async () => {
  let res = await axios.get(`${API_HOSPITAL}/beds/${userDetails.idCompany}`);
  return res.data;
};

export const postBeds = async (data) => {
  let res = await axios.post(`${API_HOSPITAL}/beds`, data);
  return res.data;
};

export const putBeds = async (data, id) => {
  let res = await axios.put(`${API_HOSPITAL}/beds/${id}`, data);
  return res.data;
};

export const getBedsByRoom = async (idRoom) => {
  let res = await axios.get(`${API_HOSPITAL}/beds/${idRoom}/${userDetails.idCompany}`);
  return res.data;
};
