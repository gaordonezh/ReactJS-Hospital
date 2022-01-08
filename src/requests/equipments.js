import axios from "axios";
import API_HOSPITAL from "config/api.config";
import userDetails from "utils/userDetails";

export const getEquipments = async () => {
  let res = await axios.get(
    `${API_HOSPITAL}/equipments/${userDetails.idCompany}`
  );
  return res.data;
};

export const getEquipmentById = async (id) => {
  let res = await axios.get(`${API_HOSPITAL}/equipment-id/${id}`);
  return res.data;
};

export const postEquipments = async (data) => {
  let res = await axios.post(`${API_HOSPITAL}/equipments`, data);
  return res.data;
};

export const putEquipments = async (data, id) => {
  let res = await axios.put(`${API_HOSPITAL}/equipments/${id}`, data);
  return res.data;
};

export const getEquipmentsByRoom = async (idRoom) => {
  let res = await axios.get(
    `${API_HOSPITAL}/equipments/${idRoom}/${userDetails.idCompany}`
  );
  return res.data;
};
