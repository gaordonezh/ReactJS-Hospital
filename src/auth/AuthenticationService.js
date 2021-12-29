import StorageService from "./StorageService";
import SESSION_NAME from "config/session";
import { authUser } from "requests";

class AuthenticationService {
  static login(obj) {
    const result = new Promise((resolve, reject) => {
      authUser(obj)
        .then((data) => {
          resolve(data);
        })
        .catch(() => {
          reject(new Error("Usuario y/o contraseña incorrectos."));
        });
    });
    return result;
  }

  static logout() {
    return new Promise((resolve, reject) => {
      this.isAuthenticated = false;
      this.userData = null;
      StorageService.remove(SESSION_NAME);
      resolve();
    });
  }
}

export default AuthenticationService;
