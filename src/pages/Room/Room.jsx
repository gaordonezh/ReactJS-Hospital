import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import TableRoom from "./components/TableRoom";
import Page from "components/Page";
import ModalRoom from "./components/ModalRoom";
import { getRooms } from "requests";
import { notification } from "antd";

const Room = () => {
  const [modal, setModal] = useState({ open: false, data: null });
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    obtainData();
  }, []);

  const obtainData = async () => {
    setLoading(true);
    try {
      const res = await getRooms();
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
      title="HABITACIONES o AMBIENTES"
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
      <TableRoom loading={loading} data={data} setModal={setModal} />
      {modal.open && (
        <ModalRoom
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

export default Room;