import React, { useState } from "react";
import CustomTable from "components/CustomTable";
import { ButtonGroup, Button, Avatar } from "@mui/material";
import ModalChange from "./ModalChange";

const TableCompany = ({ data, loading, setModal }) => {
  const [change, setChange] = useState({ open: false, data: null });

  const columns = [
    {
      title: "Nombre",
      dataIndex: "name",
      key: "name",
      align: "center",
      sorter: true,
      filter: true,
    },
    {
      title: "Logo",
      dataIndex: "logo",
      key: "logo",
      align: "center",
      sorter: false,
      filter: false,
      render: (value) => <Avatar src={value} alt="Logo image" />,
    },
    {
      title: "Acciones",
      dataIndex: "_id",
      key: "_id",
      align: "center",
      render: (text, record) => (
        <ButtonGroup>
          <Button
            color="primary"
            onClick={() => setModal({ open: true, data: record })}
          >
            EDITAR
          </Button>
          <Button
            color="secondary"
            onClick={() => setChange({ open: true, data: record })}
          >
            CAMBIAR
          </Button>
        </ButtonGroup>
      ),
    },
  ];

  return (
    <div>
      <CustomTable columns={columns} data={data} loading={loading} />
      {change.open && (
        <ModalChange
          open={change.open}
          setOpen={setChange}
          data={change.data}
        />
      )}
    </div>
  );
};

export default TableCompany;
