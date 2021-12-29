import React from "react";
import CustomTable from "components/CustomTable";
import { ButtonGroup, Button, Badge } from "@mui/material";
import BedroomChildIcon from '@mui/icons-material/BedroomChild';
import GroupWorkIcon from '@mui/icons-material/GroupWork';

const TableRoom = ({ data, loading, setModal }) => {
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
      title: "Descripción",
      dataIndex: "description",
      key: "description",
      align: "center",
      sorter: true,
      filter: true,
    },
    {
      title: "Estado",
      dataIndex: "status",
      key: "status",
      align: "center",
      sorter: true,
      filter: true,
    },
    {
      title: "Tipo",
      dataIndex: "type",
      key: "type",
      align: "center",
      sorter: true,
      filter: true,
    },
    {
      title: "Camas",
      dataIndex: "_id",
      key: "_id",
      align: "center",
      sorter: false,
      filter: false,
      render: (value, row) => (
        <Badge badgeContent={row.beds.length.toString()} color="primary">
          <BedroomChildIcon color="primary" />
        </Badge>
      ),
    },
    {
      title: "Equipos",
      dataIndex: "_id",
      key: "_id",
      align: "center",
      sorter: false,
      filter: false,
      render: (value, row) => (
        <Badge badgeContent={row.equipments.length.toString()} color="primary">
          <GroupWorkIcon color="primary" />
        </Badge>
      ),
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

export default TableRoom;
