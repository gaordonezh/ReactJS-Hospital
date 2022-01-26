import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Grid,
  TextField,
  Typography,
  FormHelperText,
  Divider,
  InputAdornment,
  IconButton,
  Switch,
  FormControlLabel,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { Spin, notification } from "antd";
import { postEquipments, putEquipments } from "requests";
import user from "utils/userDetails";
import CloseIcon from "@mui/icons-material/Close";
import SelectTypeEquipment from "../../../components/selects/SelectTypeEquipment";

const ModalEquipments = (props) => {
  const { open, setOpen, setLoading, loading, data, reloadFunction } = props;
  const [type, setType] = useState(Boolean(data) ? data.type : null);
  const [dates, setDates] = useState(Boolean(data) ? data.dates : []);
  const [grt, setGrt] = useState({ active: true, start: "", end: "" });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendRegister = async (items) => {
    try {
      if (!type) {
        notification["warning"]({ message: "Campos requeridos..." });
        return;
      }
      setLoading(true);
      if (!data) items["company"] = user.idCompany;
      items["type"] = type;
      items["dates"] = dates;
      if (data) await putEquipments(items, data._id);
      else await postEquipments(items);
      reloadFunction();
      setOpen({ open: false });
      notification["success"]({
        message: `Éxito!`,
        description: `El equipo se ${
          Boolean(data) ? "actualizó" : "registró"
        } correctamente.`,
      });
    } catch (error) {
      notification["error"]({
        message: `Error!`,
        description: `Ocurrió un error al ${
          Boolean(data) ? "actualizar" : "registrar"
        } la información.`,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} fullWidth maxWidth="md">
      <DialogTitle>
        <Typography variant="p" align="center">
          <b>{Boolean(data) ? "EDITAR" : "AGREGAR"} EQUIPO</b>
        </Typography>
      </DialogTitle>
      <Spin spinning={loading}>
        <form onSubmit={handleSubmit(sendRegister)} autoComplete="off">
          <DialogContent>
            <Grid container spacing={1}>
              <Grid item xs={12} md={6}>
                <SelectTypeEquipment value={type} onChange={setType} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="NOMBRE"
                  autoFocus
                  fullWidth
                  defaultValue={Boolean(data) ? data.name : ""}
                  error={Boolean(errors?.name ?? false)}
                  {...register("name", { required: true, maxLength: 80 })}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <TextField
                  label="ETIQUETA"
                  fullWidth
                  defaultValue={Boolean(data) ? data.etiqueta : ""}
                  error={Boolean(errors?.etiqueta ?? false)}
                  {...register("etiqueta", { required: true, maxLength: 80 })}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <TextField
                  label="MARCA"
                  fullWidth
                  defaultValue={Boolean(data) ? data.marca : ""}
                  error={Boolean(errors?.marca ?? false)}
                  {...register("marca", { required: true, maxLength: 80 })}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <TextField
                  label="MODELO"
                  fullWidth
                  defaultValue={Boolean(data) ? data.modelo : ""}
                  error={Boolean(errors?.modelo ?? false)}
                  {...register("modelo", { required: true, maxLength: 80 })}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <TextField
                  label="SERIE"
                  fullWidth
                  defaultValue={Boolean(data) ? data.serie : ""}
                  error={Boolean(errors?.serie ?? false)}
                  {...register("serie", { required: true, maxLength: 80 })}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <TextField
                  label="AÑO DE FABRICACIÓN"
                  fullWidth
                  type="number"
                  defaultValue={Boolean(data) ? data.year_fab : ""}
                  error={Boolean(errors?.year_fab ?? false)}
                  {...register("year_fab", { required: true, min: 1900 })}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <TextField
                  label="PRECIO"
                  fullWidth
                  type="number"
                  defaultValue={Boolean(data) ? data.price : ""}
                  error={Boolean(errors?.price ?? false)}
                  inputProps={{ step: 0.01 }}
                  {...register("price", { required: true, min: 0 })}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={grt.active}
                      onChange={(a, b) => setGrt({ ...grt, active: b })}
                    />
                  }
                  label="¿Garantía?"
                />

                <TextField
                  label="GARANTÍA"
                  fullWidth
                  type="number"
                  defaultValue={Boolean(data) ? data.price : ""}
                  error={Boolean(errors?.price ?? false)}
                  inputProps={{ step: 0.01 }}
                  {...register("price", { required: true, min: 0 })}
                />
              </Grid>
              <Grid item xs={12}>
                <FormHelperText>FECHAS DE MANTENIMIENTO</FormHelperText>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                {dates.map((el, i) => (
                  <TextField
                    label={`Fecha de mantenimiento ${i + 1}`}
                    fullWidth
                    value={el.date}
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    sx={{ mb: 1 }}
                    disabled={!el.status}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          {el.status && (
                            <IconButton
                              onClick={() => {
                                dates.splice(i, 1);
                                setDates([...dates]);
                              }}
                              color="error"
                            >
                              <CloseIcon />
                            </IconButton>
                          )}
                        </InputAdornment>
                      ),
                    }}
                    onChange={(e) => {
                      dates[i].date = e.target.value;
                      setDates([...dates]);
                    }}
                  />
                ))}
              </Grid>
              <Grid item xs={12} align="center">
                <Button
                  variant="outlined"
                  onClick={() => {
                    dates.push({ date: "", status: true });
                    setDates([...dates]);
                  }}
                >
                  AGREGAR
                </Button>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => setOpen({ open: false })}
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

export default ModalEquipments;
