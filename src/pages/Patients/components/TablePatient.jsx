import React, { Fragment, useState } from "react";
import CustomTable from "components/CustomTable";
import { ButtonGroup, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import ModalPatient from "./ModalPatient";

const TablePatient = ({ data = [], loading, setLoading, reloadFunction }) => {
  const [editPatient, setEditPatient] = useState({ open: false, data: null });

  const columns = [
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
      dataIndex: "sex",
      key: "sex",
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
      title: "Ocupación",
      dataIndex: "ocupacion",
      key: "ocupacion",
      align: "center",
      sorter: true,
      filter: true,
    },
    // {
    //   title: "Estado Civíl",
    //   dataIndex: "estado_civil",
    //   key: "estado_civil",
    //   align: "center",
    //   sorter: true,
    //   filter: true,
    // },
    {
      title: "Estado",
      dataIndex: "status",
      key: "status",
      align: "center",
      sorter: true,
      filter: true,
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
            onClick={() => setEditPatient({ data: record, open: true })}
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
      {Boolean(editPatient.open) && (
        <ModalPatient
          open={editPatient.open}
          setOpen={setEditPatient}
          loading={loading}
          setLoading={setLoading}
          reloadFunction={reloadFunction}
          data={editPatient.data}
        />
      )}
    </Fragment>
  );
};

export default TablePatient;
