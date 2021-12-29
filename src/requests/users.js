import axios from "axios";
import API_HOSPITAL from "config/api.config";
import userDetails from "utils/userDetails";

export const authUser = async (data) => {
  let res = await axios.post(`${API_HOSPITAL}/login`, data);
  return res.data;
};

export const getUsers = async () => {
  let res = await axios.get(`${API_HOSPITAL}/users/${userDetails.idCompany}`);
  return res.data;
};

export const getUsersByRole = async (role) => {
  let res = await axios.get(
    `${API_HOSPITAL}/users-rol/${role}/${userDetails.idCompany}`
  );
  return res.data;
};

export const postUsers = async (data) => {
  let res = await axios.post(`${API_HOSPITAL}/users`, data);
  return res.data;
};

export const putUsers = async (data, id) => {
  let res = await axios.put(`${API_HOSPITAL}/users/${id}`, data);
  return res.data;
};

export const deleteUsers = async (id) => {
  let res = await axios.delete(`${API_HOSPITAL}/users/${id}`);
  return res.data;
};

export const updateProfilePhoto = async (data) => {
  let res = await axios.put(`${API_HOSPITAL}/user/update-photo`, data);
  return res.data;
};
