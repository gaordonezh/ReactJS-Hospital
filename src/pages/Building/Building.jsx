import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import TableBuilding from "./components/TableBuilding";
import Page from "components/Page";
import ModalBuilding from "./components/ModalBuilding";
import { getBuildings } from "requests";
import { notification } from "antd";

const Building = () => {
  const [modal, setModal] = useState({ open: false, data: null });
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    obtainData();
  }, []);

  const obtainData = async () => {
    setLoading(true);
    try {
      const res = await getBuildings();
      setData(res);
    } catch (error) {
      notification["error"]({
        message: `Oops!`,
        description: `Ocurrió un error al obtener la información.`,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Page
      helper="CONFIGURACIÓN"
      title="EDIFICIOS"
      itemComponent={
        <Button
          variant="contained"
          size="large"
          onClick={() => setModal({ open: true })}
        >
          AGREGAR
        </Button>
      }
    >
      <br />
      <TableBuilding loading={loading} data={data} setModal={setModal} />
      {modal.open && (
        <ModalBuilding
          open={modal.open}
          setOpen={setModal}
          loading={loading}
          data={modal.data}
          setLoading={setLoading}
          reloadFunction={obtainData}
        />
      )}
    </Page>
  );
};

export default Building;
