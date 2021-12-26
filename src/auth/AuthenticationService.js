import { api } from "utils/api";
import SessionStorageService from "./SessionStorageService";
import SessionTimeService from "./SessionTimeService";
import SESSION_NAME from "config/session";
import axios from "axios";

class AuthenticationService {
  static isAuthenticated = false;

  static userData;

  static headers = {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  };

  static login(obj) {
    const result = new Promise((resolve, reject) => {
      axios
        .post(`${api}/auth/signin`, obj)
        .then((res) => {
          this.isAuthenticated = true;
          this.userData = res;
          SessionStorageService.set(SESSION_NAME, {
            expiresAt: SessionTimeService.estimatedTime(),
            value: res.data,
          });
          resolve(res.data);
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
      SessionStorageService.remove(SESSION_NAME);
      resolve();
    });
  }
}

export default AuthenticationService;
