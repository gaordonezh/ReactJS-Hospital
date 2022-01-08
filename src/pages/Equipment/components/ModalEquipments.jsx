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
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <SelectTypeEquipment value={type} onChange={setType} />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  label="NOMBRE"
                  autoFocus
                  fullWidth
                  defaultValue={Boolean(data) ? data.name : ""}
                  error={Boolean(errors?.name ?? false)}
                  {...register("name", { required: true, maxLength: 80 })}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="ETIQUETA"
                  fullWidth
                  defaultValue={Boolean(data) ? data.etiqueta : ""}
                  error={Boolean(errors?.etiqueta ?? false)}
                  {...register("etiqueta", { required: true, maxLength: 80 })}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="MARCA"
                  fullWidth
                  defaultValue={Boolean(data) ? data.marca : ""}
                  error={Boolean(errors?.marca ?? false)}
                  {...register("marca", { required: true, maxLength: 80 })}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="MODELO"
                  fullWidth
                  defaultValue={Boolean(data) ? data.modelo : ""}
                  error={Boolean(errors?.modelo ?? false)}
                  {...register("modelo", { required: true, maxLength: 80 })}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="SERIE"
                  fullWidth
                  defaultValue={Boolean(data) ? data.serie : ""}
                  error={Boolean(errors?.serie ?? false)}
                  {...register("serie", { required: true, maxLength: 80 })}
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
