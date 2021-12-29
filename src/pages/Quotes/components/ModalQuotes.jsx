import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Grid,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { Spin, notification } from "antd";
import {
  putQuotes,
  postQuotes,
  getUsersByRole,
  getPatients,
  getFreeDays,
} from "requests";
import SelectUsers from "components/selects/SelectUsers";
import userDetails from "utils/userDetails";
import moment from "moment-timezone";

const ModalQuotes = ({
  open,
  setOpen,
  setLoading,
  loading,
  data,
  reloadFunction,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [users, setUsers] = useState([]);
  const [patients, setPatients] = useState([]);
  const [user, setUser] = useState(Boolean(data) ? data.user._id : null);
  const [quote, setQuote] = useState("");
  const [days, setDays] = useState([]);
  const [patient, setPatient] = useState(
    Boolean(data) ? data.patient._id : null
  );

  useEffect(() => {
    obtainInitialData();
  }, []);

  useEffect(() => {
    if (user) obtainData();
  }, [user]);

  const obtainData = async () => {
    setLoading(true);
    try {
      const res = await getFreeDays(user);
      setDays(res);
    } catch (error) {
      notification["error"]({
        message: `Ocurrió un error al realizar la operación.`,
      });
    } finally {
      setLoading(false);
    }
  };

  const obtainInitialData = async () => {
    setLoading(true);
    try {
      const resU = await getUsersByRole("doctor");
      const resP = await getPatients();
      setUsers(resU);
      setPatients(resP);
    } catch (error) {
      notification["error"]({
        message: `Oops!`,
        description: `Ocurrió un error al obtener la información de los usuarios.`,
      });
    } finally {
      setLoading(false);
    }
  };

  const sendRegister = async (items) => {
    try {
      if (!user || !patient) {
        notification["warning"]({ message: "Campos requeridos!" });
        return;
      }
      items["user"] = user;
      items["patient"] = patient;
      items["start"] = items.start_date + "T" + items.start_time;
      if (!Boolean(data)) items["company"] = userDetails.idCompany;
      if (!Boolean(data)) items["status"] = "PENDIENTE";
      items["end"] = moment(items.start)
        .add(1, "hour")
        .format("YYYY-MM-DDTHH:mm:ss");

      setLoading(true);
      if (Boolean(data)) await putQuotes(items, data._id);
      else await postQuotes(items);

      reloadFunction();
      setOpen(false);
      notification["success"]({
        message: `Éxito!`,
        description: `La cita se ${
          Boolean(data) ? "actualizó" : "registró"
        } correctamente..`,
      });
    } catch (error) {
      notification["warning"]({
        message: `Ocurrió un error al ${
          Boolean(data) ? "actualizar" : "registrar"
        } la cita.`,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} fullWidth maxWidth="md">
      <DialogTitle>
        <Typography variant="subtitle1" component="p" align="center">
          <b>{Boolean(data) ? "EDITAR" : "AGREGAR"}</b>
        </Typography>
      </DialogTitle>
      <Spin spinning={loading}>
        <form onSubmit={handleSubmit(sendRegister)} autoComplete="off">
          <DialogContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <SelectUsers
                  title="MÉDICOS"
                  value={user}
                  data={users}
                  onChange={(e) => {
                    setQuote("");
                    setUser(e);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth size="small" disabled={!user}>
                  <InputLabel>Día y Hora</InputLabel>
                  <Select
                    label="Día y Hora"
                    value={quote}
                    onChange={(e) => setQuote(e.target.value)}
                  >
                    {days.map((row, i) => (
                      <MenuItem value={row} key={i}>
                        <b>{row.day}</b>
                        <FormHelperText component="span" sx={{ pl: 1 }}>
                          {row.start} ─ {row.end}
                        </FormHelperText>
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="FECHA"
                  InputLabelProps={{ shrink: true }}
                  size="small"
                  fullWidth
                  type="date"
                  disabled={!quote}
                  defaultValue={
                    Boolean(data) ? moment(data.start).format("YYYY-MM-DD") : ""
                  }
                  inputProps={{ min: `${quote?.ts}`, max: `${quote?.ts}` }}
                  error={Boolean(errors?.start_date ?? false)}
                  {...register("start_date", { required: true })}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="HORA"
                  InputLabelProps={{ shrink: true }}
                  size="small"
                  fullWidth
                  type="time"
                  disabled={!quote}
                  defaultValue={
                    Boolean(data) ? moment(data.start).format("HH:mm:ss") : ""
                  }
                  inputProps={{ min: `${quote?.start}`, max: `${quote?.end}` }}
                  error={Boolean(errors?.start_time ?? false)}
                  {...register("start_time", { required: true })}
                />
              </Grid>
              {/* <Grid item xs={12} sm={6}>
                <TextField
                  label="MOTIVO"
                  fullWidth
                  defaultValue={Boolean(data) ? data.urgency : ""}
                  error={Boolean(errors?.urgency ?? false)}
                  {...register("urgency", { required: true })}
                />
              </Grid> */}
              <Grid item xs={12}>
                <SelectUsers
                  title="PACIENTE"
                  value={patient}
                  data={patients}
                  onChange={setPatient}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => setOpen(false)}
            >
              CANCELAR
            </Button>
            <Button variant="contained" color="primary" type="submit">
              {Boolean(data) ? "ACTUALIZAR" : "GUARDAR"}
            </Button>
          </DialogActions>
        </form>
      </Spin>
    </Dialog>
  );
};

export default ModalQuotes;
