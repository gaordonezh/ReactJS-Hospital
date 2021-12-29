import React, { useState, useEffect } from "react";
import { notification } from "antd";
import StorageService from "auth/StorageService";
import SESSION_NAME from "config/session";
import user from "utils/userDetails";

const ChangeRestaurant = () => {
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("GET DATA");
  }, []);

  return <span>SELECT COMPANIES</span>;
};

export default ChangeRestaurant;
