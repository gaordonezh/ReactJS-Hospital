import React, { useState, useEffect } from "react";
import { notification } from "antd";
import SessionStorageService from "auth/SessionStorageService";
import SESSION_NAME from "config/session";
import user from "utils/userDetails";

const ChangeRestaurant = () => {
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (user.roles?.includes("superadmin") || user.rol === "superadmin") {
      console.log("GET DATA");
    } else setData(user.restaurants);
  }, []);

  useEffect(() => {
    if (!Boolean(user.restaurant)) {
      if (data.length > 0) {
        let res = SessionStorageService.get(SESSION_NAME);
        res.value.data["restaurant"] = data[0];
        SessionStorageService.set(SESSION_NAME, res);
        setSelected(data[0]._id);
      }
    } else {
      setSelected(user.restaurant._id);
    }
  }, [data]);

  const handleRestaurante = (e) => {
    try {
      let res = SessionStorageService.get(SESSION_NAME);
      let finder = data.find((el) => el._id === e);
      res.value.data["restaurant"] = finder;
      SessionStorageService.set(SESSION_NAME, res);
      setSelected(e);
      window.location.reload();
    } catch (error) {
      notification["error"]({
        message: "Oops!",
        description: `Ocurrió un error. ${error}`,
      });
    }
  };

  return <span>SELECT COMPANIES</span>;
};

export default ChangeRestaurant;
