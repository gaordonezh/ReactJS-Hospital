import axios from "axios";
import API_HOSPITAL from "config/api.config";
import userDetails from "utils/userDetails";

export const getAttentions = async (attention) => {
  let res = await axios.get(
    `${API_HOSPITAL}/attentions/${userDetails.idCompany}/${attention}`
  );
  return res.data;
};

export const postAttentions = async (data) => {
  let res = await axios.post(`${API_HOSPITAL}/attentions`, data);
  return res.data;
};

export const putAttentions = async (data, cod) => {
  let res = await axios.put(`${API_HOSPITAL}/attentions/${cod}`, data);
  return res.data;
};
