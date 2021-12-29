import React from "react";
import CustomTable from "components/CustomTable";
import { ButtonGroup, Button, Badge } from "@mui/material";

const TableBed = ({ data, loading, setModal }) => {
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
      title: "Paciente actual",
      dataIndex: "_id",
      key: "_id",
      align: "center",
      sorter: false,
      filter: false,
      render: (a, b) => b.current_patient?.f_name ?? "-",
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
            onClick={() => setModal({ open: true, data: record })}
          >
            EDIT
          </Button>
        </ButtonGroup>
      ),
    },
  ];

  return (
    <div>
      <CustomTable columns={columns} data={data} loading={loading} />
    </div>
  );
};

export default TableBed;
