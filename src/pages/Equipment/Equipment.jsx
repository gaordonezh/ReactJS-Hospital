import React, { useEffect, useState } from "react";
import {
  Button,
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Fab,
  Divider,
  CardHeader,
  Avatar,
  FormControlLabel,
  Checkbox,
  FormGroup,
  Box,
  FormHelperText,
  Chip,
  Stack,
} from "@mui/material";
import Page from "components/Page";
import { getEquipments } from "requests";
import ModalEquipments from "./components/ModalEquipments";
import { Empty, notification, Spin } from "antd";
import EditIcon from "@mui/icons-material/Edit";
import moment from "moment-timezone";
import { listTypes } from "../../components/selects/SelectTypeEquipment";
import CallMadeIcon from "@mui/icons-material/CallMade";
import { Link } from "react-router-dom";

function intersection(a, b) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

const Equipment = () => {
  const [modal, setModal] = useState({ data: null, open: false });
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [types, setTypes] = useState([...listTypes]);

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

  const handleChange = (tp) => {
    if (!intersection(types, listTypes).includes(tp)) {
      types.push(tp);
    } else {
      let index = types.findIndex((e) => e === tp);
      types.splice(index, 1);
    }
    setTypes([...types]);
  };

  return (
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
      <Spin spinning={loading}>
        <Box p={1}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <FormGroup row>
                {listTypes.map((e, index) => (
                  <FormControlLabel
                    sx={{ mx: 1 }}
                    key={index}
                    control={
                      <Checkbox
                        sx={{ p: 0 }}
                        name={e}
                        onClick={() => handleChange(e)}
                        checked={intersection(types, listTypes).includes(e)}
                      />
                    }
                    label={<FormHelperText>{e}</FormHelperText>}
                  />
                ))}
              </FormGroup>
            </Grid>
            {data.length > 0 ? (
              data
                .filter((e) => types.includes(e.type))
                .map((row, ind) => (
                  <Grid item xs={12} sm={6} md={4} lg={4} xl={3} key={ind}>
                    <CustomCard row={row} setModal={setModal} />
                  </Grid>
                ))
            ) : (
              <Grid item xs={12}>
                <Empty description="AQUÍ SE MOSTRARÁN LOS EQUIPOS" />
              </Grid>
            )}
          </Grid>
        </Box>
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
  );
};

export default Equipment;

const CustomCard = ({ row, setModal }) => {
  return (
    <Card variant="outlined" sx={{ height: "100%" }}>
      <CardHeader
        avatar={<Avatar>{row.name.toUpperCase().charAt(0)}</Avatar>}
        title={row.name}
        subheader={
          <FormHelperText sx={{ fontSize: 11 }}>{row.type}</FormHelperText>
        }
      />
      <CardContent sx={{ height: "calc((100%) - 130px)" }}>
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
        <Divider />
        <Stack spacing={0.25} sx={{ mt: 1 }}>
          {row.dates.map((el, ind) => {
            let color = "success";
            if (el.status) {
              color = "info";
              if (moment().format("YYYY-MM-DD") > el.date) {
                color = "error";
              }
            }
            return (
              <Chip
                label={`${moment(el.date)
                  .format("ddd D MMM YYYY")
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
          })}
        </Stack>
      </CardContent>
      <CardActions disableSpacing>
        <Fab
          size="small"
          onClick={() => setModal({ data: row, open: true })}
          color="secondary"
        >
          <EditIcon />
        </Fab>

        <Button
          variant="contained"
          sx={{ marginLeft: "auto" }}
          component={Link}
          to={`/equipment/maintenance/${row._id}`}
        >
          MANTENIMIENTO <CallMadeIcon />
        </Button>
      </CardActions>
    </Card>
  );
};
