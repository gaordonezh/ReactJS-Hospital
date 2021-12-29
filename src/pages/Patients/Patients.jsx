import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import TablePatient from "./components/TablePatient";
import Page from "components/Page";
import ModalPatient from "./components/ModalPatient";
import { getPatients } from "requests";
import { notification } from "antd";

const Patients = () => {
  const [addPatient, setAddPatient] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    obtainData();
  }, []);

  const obtainData = async () => {
    setLoading(true);
    try {
      const res = await getPatients();
      setData([...res]);
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
      helper="PACIENTES"
      title="PACIENTES"
      itemComponent={
        <Button
          variant="contained"
          size="large"
          onClick={() => setAddPatient(true)}
        >
          AGREGAR
        </Button>
      }
    >
      <br />
      <TablePatient
        loading={loading}
        data={data}
        setLoading={setLoading}
        reloadFunction={obtainData}
      />
      {addPatient && (
        <ModalPatient
          open={addPatient}
          setOpen={setAddPatient}
          loading={loading}
          setLoading={setLoading}
          reloadFunction={obtainData}
        />
      )}
    </Page>
  );
};

export default Patients;
