import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { Spin, notification } from "antd";
import { postBeds, putBeds } from "requests";
import user from "utils/userDetails";

const ModalBed = (props) => {
  const { open, setOpen, setLoading, loading, data, reloadFunction } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendRegister = async (items) => {
    setLoading(true);
    try {
      if (!data) items["company"] = user.idCompany;
      if (data) await putBeds(items, data._id);
      else await postBeds(items);
      reloadFunction();
      setOpen({ open: false });
      notification["success"]({
        message: `Éxito!`,
        description: `La cama se ${
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
        <Typography variant="subtitle1" align="center">
          <b>{Boolean(data) ? "EDITAR" : "AGREGAR"} CAMA</b>
        </Typography>
      </DialogTitle>
      <Spin spinning={loading}>
        <form onSubmit={handleSubmit(sendRegister)} autoComplete="off">
          <DialogContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="NOMBRE"
                  autoFocus
                  fullWidth
                  defaultValue={Boolean(data) ? data.name : ""}
                  error={Boolean(errors?.name ?? false)}
                  {...register("name", { required: true, maxLength: 80 })}
                />
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

export default ModalBed;
