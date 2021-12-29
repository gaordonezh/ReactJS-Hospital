import SESSION_NAME from "config/session";
import StorageService from "auth/StorageService";

let all = StorageService.get(SESSION_NAME);

let token = all ? all.token : null;
let data = all ? all.data : null;
let rol = all ? all.data.rol : null;
let company = all ? all.data.company : null;
let logoCompany = all ? all.data.company.logo : null;
let idCompany = all ? all.data.company._id : null;

const userDetails = { token, data, rol, company, logoCompany, idCompany };

export default userDetails;
