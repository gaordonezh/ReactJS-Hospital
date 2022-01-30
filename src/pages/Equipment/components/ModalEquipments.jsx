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
  InputAdornment,
  IconButton,
  Switch,
  Chip,
  Fab,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { Spin, notification } from "antd";
import { postEquipments, putEquipments } from "requests";
import user from "utils/userDetails";
import CloseIcon from "@mui/icons-material/Close";
import SelectTypeEquipment from "../../../components/selects/SelectTypeEquipment";
import { Add } from "@mui/icons-material";

const ModalEquipments = ({
  open,
  setOpen,
  setLoading,
  loading,
  data,
  reloadFunction,
}) => {
  const [type, setType] = useState(Boolean(data) ? data.type : null);
  const [dates, setDates] = useState(Boolean(data) ? data.dates : []);
  const [grt, setGrt] = useState({
    active: data ? data.garantia?.active : false,
    start: data ? data.garantia?.start : "",
    end: data ? data.garantia?.end : "",
  });
  const [insumos, setInsumos] = useState(data ? data.insumos_accesorios : []);
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
      items["insumos_accesorios"] = insumos;
      items["garantia"] = grt;
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
    <Dialog open={open} fullWidth maxWidth="lg">
      <DialogTitle>
        <Typography component="p" align="center" variant="h4">
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
                  InputLabelProps={{ shrink: true }}
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
                  InputLabelProps={{ shrink: true }}
                  label="ETIQUETA"
                  fullWidth
                  defaultValue={Boolean(data) ? data.etiqueta : ""}
                  error={Boolean(errors?.etiqueta ?? false)}
                  {...register("etiqueta", { required: true, maxLength: 80 })}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <TextField
                  InputLabelProps={{ shrink: true }}
                  label="MARCA"
                  fullWidth
                  defaultValue={Boolean(data) ? data.marca : ""}
                  error={Boolean(errors?.marca ?? false)}
                  {...register("marca", { required: true, maxLength: 80 })}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <TextField
                  InputLabelProps={{ shrink: true }}
                  label="MODELO"
                  fullWidth
                  defaultValue={Boolean(data) ? data.modelo : ""}
                  error={Boolean(errors?.modelo ?? false)}
                  {...register("modelo", { required: true, maxLength: 80 })}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <TextField
                  InputLabelProps={{ shrink: true }}
                  label="SERIE"
                  fullWidth
                  defaultValue={Boolean(data) ? data.serie : ""}
                  error={Boolean(errors?.serie ?? false)}
                  {...register("serie", { required: true, maxLength: 80 })}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <TextField
                  InputLabelProps={{ shrink: true }}
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
                  InputLabelProps={{ shrink: true }}
                  label="PRECIO"
                  fullWidth
                  type="number"
                  defaultValue={Boolean(data) ? data.price : ""}
                  error={Boolean(errors?.price ?? false)}
                  inputProps={{ step: 0.01 }}
                  {...register("price", { required: true, min: 0 })}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} container spacing={1}>
                <Grid item xs={grt.active ? 4 : 12}>
                  <Chip
                    icon={<Switch checked={grt.active} />}
                    label="¿Garantía?"
                    sx={{ width: "100%", height: "100%" }}
                    variant="outlined"
                    color="primary"
                    clickable
                    onClick={() => setGrt({ ...grt, active: !grt.active })}
                  />
                </Grid>
                {grt.active && (
                  <Grid item xs={4}>
                    <TextField
                      InputLabelProps={{ shrink: true }}
                      label="FECHA INICIO"
                      fullWidth
                      type="date"
                      value={grt.start}
                      onChange={(e) => {
                        setGrt({ ...grt, start: e.target.value });
                      }}
                    />
                  </Grid>
                )}
                {grt.active && (
                  <Grid item xs={4}>
                    <TextField
                      InputLabelProps={{ shrink: true }}
                      label="FECHA FIN"
                      fullWidth
                      type="date"
                      value={grt.end}
                      onChange={(e) => {
                        setGrt({ ...grt, end: e.target.value });
                      }}
                    />
                  </Grid>
                )}
              </Grid>

              {/* INSUMOS Y ACCESORIOS */}

              <Grid item xs={12} container spacing={1}>
                <Grid item xs={12} container alignItems="center">
                  <Fab
                    size="small"
                    color="secondary"
                    onClick={() => {
                      insumos.push("");
                      setInsumos([...insumos]);
                    }}
                    sx={{ mr: 1 }}
                  >
                    <Add />
                  </Fab>
                  <Typography variant="subtitle2">
                    <b>INSUMOS Y ACCESORIOS</b>
                  </Typography>
                </Grid>
                {insumos.map((el, i) => (
                  <Grid item xs={12} md={6} xl={4} key={i}>
                    <TextField
                      InputLabelProps={{ shrink: true }}
                      label={`Insumo o accesorio ${i + 1}`}
                      fullWidth
                      value={el}
                      InputLabelProps={{ shrink: true }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={() => {
                                insumos.splice(i, 1);
                                setInsumos([...insumos]);
                              }}
                              color="error"
                            >
                              <CloseIcon />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      onChange={(e) => {
                        insumos[i] = e.target.value;
                        setInsumos([...insumos]);
                      }}
                    />
                  </Grid>
                ))}
              </Grid>

              {/* FECHAS DE MANTENIMIENTO */}

              <Grid item xs={12} container spacing={1}>
                <Grid item xs={12} container alignItems="center">
                  <Fab
                    size="small"
                    color="secondary"
                    onClick={() => {
                      dates.push({ date: "", status: true });
                      setDates([...dates]);
                    }}
                    sx={{ mr: 1 }}
                  >
                    <Add />
                  </Fab>
                  <Typography variant="subtitle2">
                    <b>FECHAS DE MANTENIMIENTO</b>
                  </Typography>
                </Grid>
                {dates.map((el, i) => (
                  <Grid item xs={12} md={6} lg={4} xl={3} key={i}>
                    <TextField
                      InputLabelProps={{ shrink: true }}
                      label={`Fecha de mantenimiento ${i + 1}`}
                      fullWidth
                      value={el.date}
                      type="date"
                      InputLabelProps={{ shrink: true }}
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
                  </Grid>
                ))}
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
