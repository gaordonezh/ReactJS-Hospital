import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import TableCompany from "./components/TableCompany";
import Page from "components/Page";
import ModalCompany from "./components/ModalCompany";
import { getCompanies } from "requests";
import { notification } from "antd";

const Company = () => {
  const [modal, setModal] = useState({ open: false, data: null });
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    obtainData();
  }, []);

  const obtainData = async () => {
    setLoading(true);
    try {
      const res = await getCompanies();
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
      title="EMPRESAS"
      itemComponent={
        <Button
          variant="contained"
          size="large"
          onClick={() => setModal({ open: true, data: null })}
        >
          AGREGAR
        </Button>
      }
    >
      <br />
      <TableCompany loading={loading} data={data} setModal={setModal} />
      {modal.open && (
        <ModalCompany
          open={modal.open}
          setOpen={setModal}
          data={modal.data}
          loading={loading}
          setLoading={setLoading}
          reloadFunction={obtainData}
        />
      )}
    </Page>
  );
};

export default Company;
