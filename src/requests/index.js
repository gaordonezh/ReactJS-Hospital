import {
  getUsers,
  postUsers,
  putUsers,
  deleteUsers,
  getUsersByRole,
  updateProfilePhoto,
  authUser,
} from "./users";
import { getCompanies, postCompanies, putCompanies } from "./company";
import {
  getPatients,
  postPatients,
  putPatients,
  deletePatients,
} from "./patient";
import { getSchedules, postSchedules, putSchedules } from "./schedule";
import { getDays, postDays, putDays, getFreeDays } from "./day";
import { getQuotes, getQuoteByUser, postQuotes, putQuotes } from "./quote";
import { getBuildings, getMap, postBuildings, putBuildings } from "./building";
import { getLevels, postLevels, putLevels, getLevelsByBuilding } from "./level";
import { getRooms, postRooms, putRooms, getRoomByLevel } from "./room";
import { getBeds, postBeds, putBeds, getBedsByRoom } from "./bed";
import {
  getEquipments,
  postEquipments,
  putEquipments,
  getEquipmentsByRoom,
  getEquipmentById,
} from "./equipments";
import {
  getMaintenances,
  getMaintenancesByDates,
  postMaintenances,
  putMaintenances,
} from "./maintenance";
import { getHistories, postHistories } from "./history";
import { getAttentions, postAttentions, putAttentions } from "./attention";
import { getRecipes, postRecipes, putRecipes, getDashboard } from "./recipe";
import { getInsumos, postInsumos, putInsumos, deleteInsumos } from "./insumos";

export {
  // USUARIOS
  authUser,
  getUsers,
  getUsersByRole,
  postUsers,
  putUsers,
  deleteUsers,
  updateProfilePhoto,
  // COMPANIES
  getCompanies,
  postCompanies,
  putCompanies,
  // PATIENT
  getPatients,
  postPatients,
  putPatients,
  deletePatients,
  // SCHEDULES
  getSchedules,
  postSchedules,
  putSchedules,
  // DAYS
  getDays,
  postDays,
  putDays,
  getFreeDays,
  //QUOTES
  getQuotes,
  getQuoteByUser,
  postQuotes,
  putQuotes,
  //BUILDING
  getBuildings,
  getMap,
  postBuildings,
  putBuildings,
  // LEVEL
  getLevels,
  getLevelsByBuilding,
  postLevels,
  putLevels,
  // ROOM
  getRooms,
  postRooms,
  putRooms,
  getRoomByLevel,
  // BED
  getBeds,
  postBeds,
  putBeds,
  getBedsByRoom,
  // EQUIPMENT
  getEquipments,
  getEquipmentById,
  postEquipments,
  putEquipments,
  getEquipmentsByRoom,
  // MAINTENANCE
  getMaintenances,
  getMaintenancesByDates,
  postMaintenances,
  putMaintenances,
  // HISTORIES
  getHistories,
  postHistories,
  // ATTENTIONS
  getAttentions,
  postAttentions,
  putAttentions,
  // RECIPE
  getRecipes,
  postRecipes,
  putRecipes,
  getDashboard,
  // INSUMOS
  getInsumos,
  postInsumos,
  putInsumos,
  deleteInsumos,
};
