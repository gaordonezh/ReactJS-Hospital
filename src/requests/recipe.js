import axios from "axios";
import API_HOSPITAL from "config/api.config";
import userDetails from "utils/userDetails";

export const getRecipes = async (iddetail) => {
  let res = await axios.get(`${API_HOSPITAL}/recipes/${iddetail}`);
  return res.data;
};

export const postRecipes = async (data) => {
  let res = await axios.post(`${API_HOSPITAL}/recipes`, data);
  return res.data;
};

export const putRecipes = async (data, id) => {
  let res = await axios.put(`${API_HOSPITAL}/recipes/${id}`, data);
  return res.data;
};

export const getDashboard = async () => {
  let res = await axios.get(`${API_HOSPITAL}/dashboard/${userDetails.idCompany}`);
  return res.data;
};
