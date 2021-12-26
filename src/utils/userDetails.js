import SESSION_NAME from "config/session";
import SessionStorageService from "auth/SessionStorageService";

let all = SessionStorageService.get(SESSION_NAME);

let token = all ? all.value.token : null;

let data = all ? all.value.data : null;
let rol = all ? all.value.data.rol : null;
let restaurant = all ? all.value.data.restaurant : null;
let restaurants = all ? all.value.data.restaurants : null;

const userDetails = { token, data, rol, restaurant, restaurants };

export default userDetails;
