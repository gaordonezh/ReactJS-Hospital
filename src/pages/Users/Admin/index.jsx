import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import TableUser from "../components/TableUser";
import Page from "components/Page";
import ModalUser from "../components/ModalUser";
import { getUsersByRole } from "requests";
import { notification } from "antd";

const rol = "admin";

const Admin = () => {
  const [addUser, setAddUser] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    obtainData();
  }, []);

  const obtainData = async () => {
    setLoading(true);
    try {
      const res = await getUsersByRole(rol);
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
      helper="USUARIOS"
      title="DIRECTOR EJECUTIVO"
      itemComponent={
        <Button
          variant="contained"
          size="large"
          onClick={() => setAddUser(true)}
        >
          AGREGAR
        </Button>
      }
    >
      <br />
      <TableUser
        loading={loading}
        data={data}
        setLoading={setLoading}
        reloadFunction={obtainData}
        rol={rol}
      />
      {addUser && (
        <ModalUser
          open={addUser}
          setOpen={setAddUser}
          loading={loading}
          setLoading={setLoading}
          reloadFunction={obtainData}
          rol={rol}
        />
      )}
    </Page>
  );
};

export default Admin;
