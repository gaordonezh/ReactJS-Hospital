import axios from "axios";
import API_HOSPITAL from "config/api.config";
import userDetails from "utils/userDetails";

export const getUpss = async () => {
  let res = await axios.get(`${API_HOSPITAL}/upss/${userDetails.idCompany}`);
  return res.data;
};

export const getUpssByCompany = async (idUpss) => {
  let res = await axios.get(
    `${API_HOSPITAL}/upss/${idUpss}/${userDetails.idCompany}`
  );
  return res.data;
};

export const postUpss = async (data) => {
  let res = await axios.post(`${API_HOSPITAL}/upss`, data);
  return res.data;
};

export const putUpss = async (data, id) => {
  let res = await axios.put(`${API_HOSPITAL}/upss/${id}`, data);
  return res.data;
};
