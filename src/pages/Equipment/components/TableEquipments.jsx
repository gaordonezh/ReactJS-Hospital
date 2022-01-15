import React, { Fragment } from "react";
import CustomTable from "components/CustomTable";
import {
  ButtonGroup,
  Button,
  Stack,
  Chip,
  FormHelperText,
} from "@mui/material";
import { Edit, CallMade } from "@mui/icons-material";
import { Link } from "react-router-dom";
import moment from "moment-timezone";

const TableEquipments = ({ data, loading, setModal }) => {
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
      title: "Tipo",
      dataIndex: "type",
      key: "type",
      align: "center",
      sorter: true,
      filter: true,
    },
    {
      title: "Etiqueta",
      dataIndex: "etiqueta",
      key: "etiqueta",
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
      title: "Modelo",
      dataIndex: "modelo",
      key: "modelo",
      align: "center",
      sorter: true,
      filter: true,
    },
    {
      title: "Serie",
      dataIndex: "serie",
      key: "serie",
      align: "center",
      sorter: true,
      filter: true,
    },
    {
      title: "Fechas de Mantenimiento",
      dataIndex: "dates",
      key: "dates",
      align: "center",
      sorter: false,
      filter: false,
      width: 425,
      render: (dates) => (
        <Fragment>
          {dates.length > 0 ? (
            dates.map((el, ind) => {
              let color = "success";
              if (el.status) {
                color = "info";
                if (moment().format() > moment(el.date).format()) {
                  color = "error";
                }
              }
              return (
                <Chip
                  label={`${moment(el.date)
                    .format("D MMM YYYY")
                    .toUpperCase()} ─ ${
                    el.status
                      ? color === "error"
                        ? "ATRAZADO"
                        : "PENDIENTE"
                      : "REALIZADO"
                  }`}
                  color={color}
                  variant="outlined"
                  size="small"
                  key={ind}
                />
              );
            })
          ) : (
            <FormHelperText error>
              <b>NO HAY FECHAS DE MANTENIMIENTO</b>
            </FormHelperText>
          )}
        </Fragment>
      ),
    },
    {
      title: "Acciones",
      dataIndex: "_id",
      key: "_id",
      align: "center",
      render: (text, record) => (
        <ButtonGroup size="small" color="secondary" variant="outlined">
          <Button
            variant="contained"
            onClick={() => setModal({ open: true, data: record })}
          >
            <Edit />
          </Button>
          <Button component={Link} to={`/equipment/maintenance/${text}`}>
            <CallMade />
          </Button>
        </ButtonGroup>
      ),
    },
  ];

  return <CustomTable columns={columns} data={data} loading={loading} />;
};

export default TableEquipments;
