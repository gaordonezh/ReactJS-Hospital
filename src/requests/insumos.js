import axios from "axios";
import API_HOSPITAL from "config/api.config";
import userDetails from "utils/userDetails";

export const getInsumos = async () => {
  let res = await axios.get(`${API_HOSPITAL}/insumos/${userDetails.idCompany}`);
  return res.data;
};

export const postInsumos = async (data) => {
  let res = await axios.post(`${API_HOSPITAL}/insumos`, data);
  return res.data;
};

export const putInsumos = async (data, id) => {
  let res = await axios.put(`${API_HOSPITAL}/insumos/${id}`, data);
  return res.data;
};

export const deleteInsumos = async (id) => {
  let res = await axios.delete(`${API_HOSPITAL}/insumos/${id}`);
  return res.data;
};
