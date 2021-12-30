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
import { postInsumos, putInsumos } from "requests";
import user from "utils/userDetails";

const ModalInsumos = (props) => {
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
      if (data) await putInsumos(items, data._id);
      else await postInsumos(items);
      reloadFunction();
      setOpen({ open: false });
      notification["success"]({
        message: `Éxito!`,
        description: `El nivel se ${
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
        <Typography variant="h4" align="center" component="p">
          <b>{Boolean(data) ? "EDITAR" : "AGREGAR"} INSUMO</b>
        </Typography>
      </DialogTitle>
      <Spin spinning={loading}>
        <form onSubmit={handleSubmit(sendRegister)} autoComplete="off">
          <DialogContent>
            <Grid container spacing={2}>
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
              <Grid item xs={12} md={6}>
                <TextField
                  label="DESCRIPCIÓN (opcional)"
                  fullWidth
                  defaultValue={Boolean(data) ? data.description : ""}
                  error={Boolean(errors?.description ?? false)}
                  {...register("description", { required: false })}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="UNIDAD DE MEDIDA"
                  fullWidth
                  defaultValue={Boolean(data) ? data.u_medida : ""}
                  error={Boolean(errors?.u_medida ?? false)}
                  {...register("u_medida", { required: false })}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="MARCA"
                  fullWidth
                  defaultValue={Boolean(data) ? data.marca : ""}
                  error={Boolean(errors?.marca ?? false)}
                  {...register("marca", { required: false })}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="PRECIO"
                  fullWidth
                  type="number"
                  defaultValue={Boolean(data) ? data.precio : ""}
                  error={Boolean(errors?.precio ?? false)}
                  inputProps={{ min: 0, step: 0.01 }}
                  {...register("precio", { required: false })}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="STOCK"
                  fullWidth
                  type="number"
                  defaultValue={Boolean(data) ? data.stock : ""}
                  error={Boolean(errors?.stock ?? false)}
                  inputProps={{ min: 0 }}
                  {...register("stock", { required: true })}
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

export default ModalInsumos;
