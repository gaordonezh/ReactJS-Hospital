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
import { Spin, notification } from "antd";
import { useForm } from "react-hook-form";
import { postRecipes } from "requests";
import moment from "moment-timezone";

const ModalRecipe = (props) => {
  const { open, setOpen, setLoading, loading, data, reloadFunction } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendRegister = async (items) => {
    try {
      setLoading(true);
      items["historydetail"] = data._id;
      await postRecipes(items);
      reloadFunction();
      notification["success"]({
        message: `Éxito!`,
        description: `La receta se generó correctamente.`,
      });
      setOpen({ open: false });
    } catch (error) {
      notification["error"]({
        message: `Error!`,
        description: `Ocurrió un error al generar la atención.`,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} fullWidth maxWidth="md">
      <DialogTitle>
        <Typography variant="h5" align="center" component="p">
          <b>RECETA MÉDICA</b>
        </Typography>
      </DialogTitle>
      <Spin spinning={loading}>
        <form onSubmit={handleSubmit(sendRegister)} autoComplete="off">
          <DialogContent>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <TextField
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  size="small"
                  type="date"
                  defaultValue={moment().format("YYYY-MM-DD")}
                  label="Fecha de expiración"
                  error={Boolean(errors?.expiration_date ?? false)}
                  inputProps={{ min: moment().format("YYYY-MM-DD") }}
                  {...register("expiration_date", { required: true })}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <TextField
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  size="small"
                  type="date"
                  defaultValue={moment().format("YYYY-MM-DD")}
                  label="Fecha de emisión"
                  inputProps={{ min: moment().format("YYYY-MM-DD") }}
                  error={Boolean(errors?.emision_date ?? false)}
                  {...register("emision_date", { required: true })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  size="small"
                  multiline
                  minRows={3}
                  label="Recete médica"
                  error={Boolean(errors?.receta ?? false)}
                  {...register("receta", { required: true })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  size="small"
                  multiline
                  minRows={3}
                  label="Indicaciones"
                  error={Boolean(errors?.indicaciones ?? false)}
                  {...register("indicaciones", { required: true })}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button
              size="large"
              variant="outlined"
              color="secondary"
              onClick={() => setOpen(false)}
            >
              CANCELAR
            </Button>
            <Button
              size="large"
              variant="contained"
              color="primary"
              type="submit"
            >
              CREAR
            </Button>
          </DialogActions>
        </form>
      </Spin>
    </Dialog>
  );
};

export default ModalRecipe;
