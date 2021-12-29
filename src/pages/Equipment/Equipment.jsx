import React, { Fragment, useEffect, useState } from "react";
import {
  Button,
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Fab,
  Tooltip,
  Divider,
} from "@mui/material";
import Page from "components/Page";
import { getEquipments } from "requests";
import ModalEquipments from "./components/ModalEquipments";
import { Empty, notification, Spin } from "antd";
import EditIcon from "@mui/icons-material/Edit";
import SettingsIcon from "@mui/icons-material/Settings";
import Maintenance from "./components/Maintenance";
import CustomizedAccordion from "../../components/CustomAccordion";

const Equipment = () => {
  const [modal, setModal] = useState({ data: null, open: false });
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [maintenance, setMaintenance] = useState({ data: null, open: false });

  useEffect(() => {
    obtainData();
  }, []);

  const obtainData = async () => {
    setLoading(true);
    try {
      const res = await getEquipments();
      setData(res);
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
    <Fragment>
      {maintenance.open ? (
        <Maintenance
          equipment={maintenance.data}
          setMaintenance={setMaintenance}
          reloadFunction={obtainData}
        />
      ) : (
        <Page
          helper="EQUIPOS"
          title="EQUIPOS"
          itemComponent={
            <Button
              variant="contained"
              size="large"
              onClick={() => setModal({ open: true, data: null })}
            >
              AGREGAR EQUIPO
            </Button>
          }
        >
          <br />
          <Spin spinning={loading}>
            {data.length > 0 ? (
              data.map((el, index) => (
                <CustomizedAccordion title={el.type} key={index}>
                  <Grid container spacing={1}>
                    {el.items.map((row, ind2) => (
                      <Grid item xs={12} sm={6} md={4} lg={4} xl={3} key={ind2}>
                        <CustomCard
                          row={row}
                          setModal={setModal}
                          setMaintenance={setMaintenance}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </CustomizedAccordion>
              ))
            ) : (
              <Empty description="AQUÍ SE MOSTRARÁN LOS EQUIPOS REGISTRADOS" />
            )}
          </Spin>
          {modal.open && (
            <ModalEquipments
              open={modal.open}
              setOpen={setModal}
              data={modal.data}
              setLoading={setLoading}
              loading={loading}
              reloadFunction={obtainData}
            />
          )}
        </Page>
      )}
    </Fragment>
  );
};

export default Equipment;

const CustomCard = ({ row, setModal, setMaintenance }) => {
  return (
    <Card style={{ height: "100%" }}>
      <CardContent style={{ height: "calc((100%) - 60px)" }}>
        <Typography variant="h6" gutterBottom>
          {row.name}
        </Typography>
        <Divider />
        <Typography color="text.secondary" variant="body2">
          Etiqueta • {row.etiqueta}
        </Typography>
        <Divider />
        <Typography color="text.secondary" variant="body2">
          Marca • {row.marca}
        </Typography>
        <Divider />
        <Typography color="text.secondary" variant="body2">
          Modelo • {row.modelo}
        </Typography>
        <Divider />
        <Typography color="text.secondary" variant="body2">
          Serie • {row.serie}
        </Typography>
      </CardContent>
      <CardActions>
        <Tooltip title="Editar" placement="top-end">
          <Fab
            color="secondary"
            size="small"
            onClick={() => setModal({ data: row, open: true })}
          >
            <EditIcon />
          </Fab>
        </Tooltip>
        <Tooltip title="Mantenimiento" placement="top-end">
          <Fab
            color="primary"
            size="small"
            onClick={() => setMaintenance({ data: row, open: true })}
          >
            <SettingsIcon />
          </Fab>
        </Tooltip>
      </CardActions>
    </Card>
  );
};
