import React, { Fragment, useState } from "react";
import CustomTable from "components/CustomTable";
import { ButtonGroup, Button, Avatar } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import ModalUser from "./ModalUser";

const TableUser = ({ data = [], loading, setLoading, reloadFunction, rol }) => {
  const [editUser, setEditUser] = useState({ open: false, data: null });

  const columns = [
    {
      title: "",
      dataIndex: "profile_picture",
      key: "profile_picture",
      align: "center",
      sorter: false,
      filter: false,
      render: (value) => <Avatar src={value} />,
    },
    {
      title: "Nombres",
      dataIndex: "f_name",
      key: "f_name",
      align: "center",
      sorter: true,
      filter: true,
    },
    {
      title: "Apellidos",
      dataIndex: "l_name",
      key: "l_name",
      align: "center",
      sorter: true,
      filter: true,
    },
    {
      title: "Documento",
      dataIndex: "t_doc",
      key: "t_doc",
      align: "center",
      sorter: true,
      filter: true,
    },
    {
      title: "Nro Documento",
      dataIndex: "n_doc",
      key: "n_doc",
      align: "center",
      sorter: true,
      filter: true,
    },
    {
      title: "Celular",
      dataIndex: "phone",
      key: "phone",
      align: "center",
      sorter: true,
      filter: true,
    },

    {
      title: "Fecha Nacimiento",
      dataIndex: "date_born",
      key: "date_born",
      align: "center",
      sorter: true,
      filter: true,
    },
    {
      title: "Correo",
      dataIndex: "email",
      key: "email",
      align: "center",
      sorter: true,
      filter: true,
    },
    {
      title: "Sexo",
      dataIndex: "type_sex",
      key: "type_sex",
      align: "center",
      sorter: true,
      filter: true,
    },
    {
      title: "Dirección",
      dataIndex: "_id",
      key: "_id",
      align: "center",
      sorter: false,
      filter: false,
      render: (value, row) => <Fragment>{row.ubigeo.address}</Fragment>,
    },
    {
      title: "Acciones",
      dataIndex: "_id",
      key: "_id",
      align: "center",
      render: (text, record) => (
        <ButtonGroup size="small">
          <Button
            color="primary"
            onClick={() => setEditUser({ data: record, open: true })}
          >
            <EditIcon />
          </Button>
        </ButtonGroup>
      ),
    },
  ];

  return (
    <Fragment>
      <CustomTable columns={columns} data={data} loading={loading} />
      {Boolean(editUser.open) && (
        <ModalUser
          open={editUser.open}
          setOpen={setEditUser}
          loading={loading}
          setLoading={setLoading}
          reloadFunction={reloadFunction}
          data={editUser.data}
          rol={rol}
        />
      )}
    </Fragment>
  );
};

export default TableUser;
