import React, { useEffect, useState } from "react";
import CustomTable from "components/CustomTable";
import { Button, Fab } from "@mui/material";
import { Link } from "react-router-dom";
import Page from "components/Page";
import { getMaintenancesByDates } from "requests";
import { notification } from "antd";
import moment from "moment-timezone";
import CallMadeIcon from "@mui/icons-material/CallMade";

const ListMaintenance = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    obtainData();
  }, []);

  const obtainData = async () => {
    setLoading(true);
    try {
      const res = await getMaintenancesByDates();
      setData(res);
    } catch (error) {
      notification["error"]({
        message: `Ocurrió un error al realizar la operación.`,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Page helper="EQUIPOS" title="MANTENIMIENTOS PENDIENTES">
      <TableMaintenance data={data} loading={loading} />
    </Page>
  );
};

export default ListMaintenance;

const TableMaintenance = ({ data = [], loading }) => {
  const columns = [
    {
      title: "FECHA DE MANTENIMIENTO",
      dataIndex: "date",
      key: "date",
      align: "center",
      filter: false,
      render: (value) => {
        let color = "#1890FF";
        if (moment().format() > moment(value).format()) {
          color = "#FF4842";
        }
        return {
          props: {
            style: { background: color, color: "white", fontWeight: 900 },
          },
          children: moment(value).format("dddd D [de] MMMM [del] YYYY"),
        };
      },
    },
    {
      title: "NOMBRE",
      dataIndex: "name",
      key: "name",
      align: "center",
      filter: false,
    },
    {
      title: "TIPO",
      dataIndex: "type",
      key: "type",
      align: "center",
      filter: false,
    },
    {
      title: "IR AL MANTENIMIENTO",
      dataIndex: "_id",
      key: "_id",
      align: "center",
      render: (text) => (
        <Fab
          color="primary"
          component={Link}
          to={`/equipment/maintenance/${text}`}
          size="small"
        >
          <CallMadeIcon />
        </Fab>
      ),
    },
  ];

  return (
    <CustomTable
      columns={columns}
      data={data}
      loading={loading}
      pageSize={false}
    />
  );
};
