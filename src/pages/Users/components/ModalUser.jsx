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
  Divider,
} from "@mui/material";
import { useForm } from "react-hook-form";
import SelectsUbigeo from "../../../components/selects/SelectsUbigeo";
import SelectSex from "../../../components/selects/SelectSex";
import SelectTypeDoc from "../../../components/selects/SelectTypeDoc";
import { Spin, notification } from "antd";
import { postUsers, putUsers } from "requests";
import user from "utils/userDetails";

const ModalUser = ({
  open,
  setOpen,
  setLoading,
  loading,
  data,
  reloadFunction,
  rol,
}) => {
  const [sex, setSex] = useState(Boolean(data) ? data.type_sex : "MASCULINO");
  const [t_doc, setT_Doc] = useState(Boolean(data) ? data.t_doc : "DNI");
  const [ubigeo, setUbigeo] = useState({
    departamento: Boolean(data) ? data.ubigeo.department : null,
    provincia: Boolean(data) ? data.ubigeo.province : null,
    distrito: Boolean(data) ? data.ubigeo.district : null,
    direccion: Boolean(data) ? data.ubigeo.address : "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendRegister = async (items) => {
    setLoading(true);
    try {
      items["type_sex"] = sex;
      items["t_doc"] = t_doc;
      items["rol"] = rol;
      items["company"] = user.idCompany;
      items["ubigeo"] = {
        address: ubigeo.direccion,
        district: ubigeo.distrito,
        province: ubigeo.provincia,
        department: ubigeo.departamento,
      };

      if (Boolean(data)) await putUsers(items, data._id);
      else await postUsers(items);

      reloadFunction();
      setOpen(false);
      notification["success"]({
        message: `Éxito!`,
        description: `La información se ${
          Boolean(data) ? "actualizó" : "registró"
        } correctamente..`,
      });
    } catch (error) {
      notification["warning"]({
        message: `El nombre de usuario y/o dni ya fueron registrados!`,
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
          <b>{Boolean(data) ? "EDITAR" : "AGREGAR"}</b>
        </Typography>
      </DialogTitle>
      <Spin spinning={loading}>
        <form onSubmit={handleSubmit(sendRegister)} autoComplete="off">
          <DialogContent>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="NOMBRES"
                  autoFocus
                  fullWidth
                  defaultValue={Boolean(data) ? data.f_name : ""}
                  error={Boolean(errors?.f_name ?? false)}
                  {...register("f_name", { required: true, maxLength: 80 })}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="APELLIDOS"
                  fullWidth
                  defaultValue={Boolean(data) ? data.l_name : ""}
                  error={Boolean(errors?.l_name ?? false)}
                  {...register("l_name", { required: true, maxLength: 80 })}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="CORREO"
                  fullWidth
                  defaultValue={Boolean(data) ? data.email : ""}
                  error={Boolean(errors?.email ?? false)}
                  {...register("email", { required: false, maxLength: 80 })}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="CELULAR"
                  fullWidth
                  type="number"
                  defaultValue={Boolean(data) ? data.phone : ""}
                  error={Boolean(errors?.phone ?? false)}
                  {...register("phone", { required: false, maxLength: 80 })}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <SelectSex sex={sex} setSex={setSex} />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <SelectTypeDoc typeDoc={t_doc} setTypeDoc={setT_Doc} />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="Nro DOCUMENTO"
                  fullWidth
                  defaultValue={Boolean(data) ? data.n_doc : ""}
                  error={Boolean(errors?.n_doc ?? false)}
                  {...register("n_doc", { required: true, maxLength: 80 })}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="FECHA DE NACIMIENTO"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  type="date"
                  defaultValue={Boolean(data) ? data.date_born : ""}
                  error={Boolean(errors?.date_born ?? false)}
                  {...register("date_born", { required: false, maxLength: 80 })}
                />
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              {!Boolean(data) ? (
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="USUARIO"
                    fullWidth
                    error={Boolean(errors?.user ?? false)}
                    {...register("user", { required: true, maxLength: 80 })}
                  />
                </Grid>
              ) : null}
              {!Boolean(data) ? (
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="CONTRASEÑA"
                    fullWidth
                    error={Boolean(errors?.password ?? false)}
                    {...register("password", { required: true, maxLength: 80 })}
                  />
                </Grid>
              ) : null}
              <Grid item xs={12}>
                <SelectsUbigeo setUbigeo={setUbigeo} ubigeo={ubigeo} />
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

export default ModalUser;
