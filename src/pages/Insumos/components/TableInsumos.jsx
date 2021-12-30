import React from "react";
import CustomTable from "components/CustomTable";
import { ButtonGroup, Button } from "@mui/material";
import {
  Delete,
  Edit,
  ArrowCircleDown,
  ArrowCircleUp,
} from "@mui/icons-material";

const TableInsumos = ({ data, loading, setModal }) => {
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
      title: "Medida",
      dataIndex: "u_medida",
      key: "u_medida",
      align: "center",
      sorter: true,
      filter: true,
    },
    {
      title: "Marca",
      dataIndex: "marca",
      key: "marca",
      align: "center",
      sorter: true,
      filter: true,
    },
    {
      title: "Precio",
      dataIndex: "precio",
      key: "precio",
      align: "center",
      sorter: true,
      filter: true,
    },
    {
      title: "Stock",
      dataIndex: "stock",
      key: "stock",
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
        <ButtonGroup size="small" color="secondary" variant="contained">
          <Button
            variant="outlined"
            onClick={() => setModal({ open: true, data: record })}
          >
            <Edit />
          </Button>
          {/* <Button>
            <ArrowCircleDown />
          </Button>
          <Button>
            <ArrowCircleUp />
          </Button> */}
        </ButtonGroup>
      ),
    },
  ];

  return <CustomTable columns={columns} data={data} loading={loading} />;
};

export default TableInsumos;
