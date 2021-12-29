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
} from "@mui/material";
import { useForm } from "react-hook-form";
import { Spin, notification } from "antd";
import { postRooms, putRooms } from "requests";
import SelectTypeRoom from "../../../components/selects/SelectTypeRoom";
import user from "utils/userDetails";

const ModalRoom = (props) => {
  const { open, setOpen, setLoading, loading, data, reloadFunction } = props;
  const [type, setType] = useState(Boolean(data) ? data.type : null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendRegister = async (items) => {
    if (type) {
      setLoading(true);
      try {
        items["type"] = type;
        if (!data) items["company"] = user.idCompany;
        if (data) await putRooms(items, data._id);
        else await postRooms(items);
        reloadFunction();
        setOpen({ open: false });
        notification["success"]({
          message: `Éxito!`,
          description: `El edificio se ${
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
    } else {
      notification["warning"]({ message: "El tipo es requerido..." });
    }
  };

  return (
    <Dialog open={open} fullWidth maxWidth="md">
      <DialogTitle>
        <Typography variant="subtitle1" align="center">
          <b>{Boolean(data) ? "EDITAR" : "AGREGAR"} HABITACIÓN o AMBIENTE</b>
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
              <Grid item xs={12}>
                <SelectTypeRoom value={type} onChange={setType} />
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

export default ModalRoom;
