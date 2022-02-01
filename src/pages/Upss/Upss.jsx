import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import TableUpss from "./components/TableUpss";
import Page from "components/Page";
import ModalUpss from "./components/ModalUpss";
import { getUpss } from "requests";
import { notification } from "antd";

const Upss = () => {
  const [modal, setModal] = useState({ open: false, data: null });
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    obtainData();
  }, []);

  const obtainData = async () => {
    setLoading(true);
    try {
      const res = await getUpss();
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
      title="UPSS"
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
      <TableUpss loading={loading} data={data} setModal={setModal} />
      {modal.open && (
        <ModalUpss
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

export default Upss;
