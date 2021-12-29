import React, { useState } from "react";
import { postSchedules, putSchedules } from "requests";
import Card from "@mui/material/Card";
import {
  Grid,
  CardContent,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import { notification } from "antd";
import user from "utils/userDetails";
import CloseIcon from "@mui/icons-material/Close";
import SaveIcon from "@mui/icons-material/Save";

const RegisterSchedules = ({ data, setLoading, refresh }) => {
  const [editData, setEditData] = useState({ open: false, data: null });

  return (
    <Grid container spacing={1} justifyContent="center">
      <Grid item xs={12} />
      {data.map((el, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={index}>
          <Card elevation={2} style={{ height: "100%" }}>
            <CardContent style={{ height: "100%" }}>
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                style={{ height: "100%" }}
              >
                <Grid item align="center">
                  <Typography variant="h6">
                    <b>Inicio • </b>
                    {el.start}
                  </Typography>
                  <Typography variant="h6">
                    <b>Fin • </b>
                    {el.end}
                  </Typography>
                  <br />
                  <Button
                    size="small"
                    variant="contained"
                    onClick={() => setEditData({ open: true, data: el })}
                  >
                    Editar
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      ))}
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        {editData.open ? (
          <FormSchedule
            setLoading={setLoading}
            setFormVisible={setEditData}
            refreshFunction={refresh}
            data={editData.data}
          />
        ) : (
          <Card elevation={2} style={{ height: "100%" }}>
            <CardContent style={{ height: "100%" }}>
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                style={{ height: "100%" }}
              >
                <Button
                  size="small"
                  variant="outlined"
                  onClick={() => setEditData({ open: true })}
                >
                  AGREGAR
                </Button>
              </Grid>
            </CardContent>
          </Card>
        )}
      </Grid>
    </Grid>
  );
};

export default RegisterSchedules;

const FormSchedule = ({
  setLoading,
  setFormVisible,
  refreshFunction,
  data,
}) => {
  const [times, setTimes] = useState({
    start: Boolean(data) ? data.start : "08:00",
    end: Boolean(data) ? data.end : "17:00",
  });

  const saveSchedule = async () => {
    try {
      if (times.start && times.end) {
        setLoading(true);
        if (!data) times["company"] = user.idCompany;
        if (data) await putSchedules(times, data._id);
        else await postSchedules(times);
        refreshFunction(true, false, false);
        notification["success"]({
          message: `El horario se ${
            Boolean(data) ? "registró" : "actualizó"
          } correctamente!`,
        });
        setFormVisible({ open: false });
      } else {
        notification["warning"]({
          message: `La horas horas no deben estar vacías!`,
        });
      }
    } catch (error) {
      notification["error"]({
        message: `Oops!`,
        description: `Ocurrió un error`,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card elevation={2} align="center">
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="subtitle1">
              <b>{Boolean(data) ? "Editar" : "Register nuevo"} horario</b>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              size="small"
              label="Hora de inicio"
              InputLabelProps={{ shrink: true }}
              type="time"
              fullWidth
              value={times.start}
              onChange={(e) => setTimes({ ...times, start: e.target.value })}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              size="small"
              label="Hora de finalización"
              InputLabelProps={{ shrink: true }}
              type="time"
              fullWidth
              value={times.end}
              onChange={(e) => setTimes({ ...times, end: e.target.value })}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => setFormVisible({ open: false })}
            >
              <CloseIcon />
            </Button>{" "}
            <Button variant="contained" onClick={saveSchedule}>
              <SaveIcon />
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
