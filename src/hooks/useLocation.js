import { useEffect, useState } from "react";
import { notification } from "antd";
import { getMap } from "requests";

const useLocation = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    obtainData();
  }, []);

  const obtainData = async () => {
    setLoading(true);
    try {
      const res = await getMap();
      setData(res.reverse());
    } catch (error) {
      notification["error"]({
        message: `Ocurrió un error al realizar la operación.`,
      });
    } finally {
      setLoading(false);
    }
  };

  return { loading, data };
};
export default useLocation;
