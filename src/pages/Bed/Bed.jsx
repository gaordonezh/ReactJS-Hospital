import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import TableBed from "./components/TableBed";
import Page from "components/Page";
import ModalBed from "./components/ModalBed";
import { getBeds } from "requests";
import { notification } from "antd";

const Bed = () => {
  const [modal, setModal] = useState({ open: false, data: null });
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    obtainData();
  }, []);

  const obtainData = async () => {
    setLoading(true);
    try {
      const res = await getBeds();
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
      title="CAMAS"
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
      <TableBed loading={loading} data={data} setModal={setModal} />
      {modal.open && (
        <ModalBed
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

export default Bed;
