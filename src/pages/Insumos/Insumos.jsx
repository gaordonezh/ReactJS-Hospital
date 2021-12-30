import { Button } from "@mui/material";
import Page from "components/Page";
import React, { useEffect, useState } from "react";
import ModalInsumos from "./components/ModalInsumos";
import TableInsumos from "./components/TableInsumos";
import { notification } from "antd";
import { getInsumos } from "requests";

const Insumos = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState({ open: false, data: null });

  useEffect(() => {
    obtainData();
  }, []);

  const obtainData = async () => {
    setLoading(true);
    try {
      const res = await getInsumos();
      setData([...res]);
    } catch (error) {
      notification["error"]({
        message: `Ocurrió un error al realizar la operación.`,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Page
      helper="INSUMOS"
      title="INSUMOS"
      itemComponent={
        <Button
          variant="contained"
          size="large"
          onClick={() => setModal({ open: true, data: null })}
        >
          AGREGAR INSUMO
        </Button>
      }
    >
      <TableInsumos data={data} loading={loading} setModal={setModal} />

      {modal.open && (
        <ModalInsumos
          open={modal.open}
          setOpen={setModal}
          loading={loading}
          setLoading={setLoading}
          data={modal.data}
          reloadFunction={obtainData}
        />
      )}
    </Page>
  );
};

export default Insumos;
