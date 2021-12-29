import React from "react";
import CustomTable from "components/CustomTable";
import { ButtonGroup, Button, Badge } from "@mui/material";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";

const TableLevel = ({ data, loading, setModal }) => {
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
      title: "Habitaciones",
      dataIndex: "_id",
      key: "_id",
      align: "center",
      sorter: false,
      filter: false,
      render: (value, row) => (
        <Badge badgeContent={row.rooms.length.toString()} color="primary">
          <MeetingRoomIcon color="primary" />
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

export default TableLevel;
