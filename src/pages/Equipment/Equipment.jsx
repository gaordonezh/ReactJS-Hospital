import React, { useEffect, useState } from "react";
import { Button, Box } from "@mui/material";
import Page from "components/Page";
import { getEquipments } from "requests";
import ModalEquipments from "./components/ModalEquipments";
import { notification } from "antd";
import TableEquipments from "./components/TableEquipments";

const Equipment = () => {
  const [modal, setModal] = useState({ data: null, open: false });
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    obtainData();
  }, []);

  const obtainData = async () => {
    setLoading(true);
    try {
      const res = await getEquipments();
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
      helper="EQUIPOS"
      title="EQUIPOS"
      itemComponent={
        <Button
          variant="contained"
          size="large"
          onClick={() => setModal({ open: true, data: null })}
        >
          AGREGAR EQUIPO
        </Button>
      }
    >
      <Box p={1}>
        <TableEquipments data={data} loading={loading} setModal={setModal} />
      </Box>
      {modal.open && (
        <ModalEquipments
          open={modal.open}
          setOpen={setModal}
          data={modal.data}
          setLoading={setLoading}
          loading={loading}
          reloadFunction={obtainData}
        />
      )}
    </Page>
  );
};

export default Equipment;
