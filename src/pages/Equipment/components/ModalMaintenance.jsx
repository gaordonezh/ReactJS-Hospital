import React, { Fragment, useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Button,
  TextField,
  Grid,
  Divider,
  FormControl,
  FormGroup,
  FormLabel,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Radio,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  InputAdornment,
  IconButton,
  Container,
  Paper,
  Card,
  InputLabel,
  Select,
  MenuItem,
  CardContent,
} from "@mui/material";
import { useForm } from "react-hook-form";
import CloseIcon from "@mui/icons-material/Close";
import { Spin, notification } from "antd";
import { postMaintenances, putMaintenances } from "requests";
import { Box } from "@mui/system";

const statusList = [
  "Bueno",
  "Regular",
  "Malo por reparar",
  "Malo por baja",
  "Inoperativo por reparar",
  "Inoperativo por baja",
];
const listTM = ["Programado", "Imprevisto"];
const listOTM = ["Preventivo", "Correctivo"];
const listPrioridad = ["Muy urgente", "Urgente", "Necesario"];
const listTipoAtencion = [
  "RRHH Propios",
  "Servicios mano de obra",
  "Servicio a todo costo",
];
const listTipoEquipamiento = [
  "Biomédico",
  "Electromecánido",
  "Instalaciones",
  "Infraestructura",
];
const listTF = [
  { label: "Eléctrica", check: false },
  { label: "Mecánica", check: false },
  { label: "Electrónica", check: false },
  { label: "Operación", check: false },
  { label: "Otros", check: false },
];

const ModalMaintenance = ({
  open,
  setOpen,
  data,
  equipment,
  refreshFunction,
  reloadFunction,
  setMaintenance,
}) => {
  const flg = Boolean(data);
  const [date, setDate] = useState("");
  const [tipoFalla, setTipoFalla] = useState(flg ? data.tipo_falla : listTF);
  const [programmed, setProgrammed] = useState(flg ? data.programmed : false);
  const [loading, setLoading] = useState(false);
  const [statusStart, setStatusStart] = useState(
    flg ? data.status_start : statusList[0]
  );
  const [statusEnd, setStatusEnd] = useState(
    flg ? data.status_end : statusList[0]
  );
  const [tipo_mantenimiento, setTipo_mantenimiento] = useState(
    flg ? data.tipo_mantenimiento : listTM[0]
  );
  const [otm, setOtm] = useState(flg ? data.tipo_otm : listOTM[0]);
  const [prioridad, setPrioridad] = useState(
    flg ? data.prioridad : listPrioridad[0]
  );
  const [tAtencion, setTAtencion] = useState(
    flg ? data.tipo_atencion : listTipoAtencion[0]
  );
  const [tEquipamento, setTEquipamento] = useState(
    flg ? data.tipo_equipamiento : listTipoEquipamiento[0]
  );
  const [actions, setActions] = useState(flg ? data.actividades_list : []);
  const [garantia, setGarantia] = useState(flg ? data.garantia : false);
  const [interrupcion, setInterrupcion] = useState(
    flg ? data.interrupcion : false
  );
  const [rcrss, setRcrss] = useState(flg ? data.recursos : []);
  const [rrhh, setRrhh] = useState(flg ? data.rrhh : []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendRegister = async (items) => {
    setLoading(true);
    try {
      // GENERAL
      items["equipment"] = equipment._id;
      // TRES
      items["programmed"] = programmed;
      items["description"] = items.description;
      items["date_request"] = items.date_request;
      items["date_conformidad"] = items.date_conformidad;
      // CUATRO
      items["diagnostico"] = items.diagnostico;
      items["ejecutor_mantenimiento"] = items.ejecutor_mantenimiento;
      items["date_programmed"] = items.date_programmed;
      items["status_start"] = statusStart;
      items["tipo_falla"] = tipoFalla;
      // CINCO
      items["tipo_mantenimiento"] = tipo_mantenimiento;
      items["tipo_otm"] = otm;
      items["prioridad"] = prioridad;
      items["tipo_atencion"] = tAtencion;
      items["tipo_equipamiento"] = tEquipamento;
      // SEIS
      items["actividades_list"] = actions;
      items["garantia"] = garantia;
      items["interrupcion"] = interrupcion;
      items["datetime_start"] = items.datetime_start;
      items["datetime_end"] = items.datetime_end;
      items["status_end"] = statusEnd;
      if (!flg) items["date"] = date;
      // SIETE
      items["recursos"] = rcrss;
      // OCHO
      items["rrhh"] = rrhh;

      if (flg) await putMaintenances(items, data._id);
      else await postMaintenances(items);

      refreshFunction(equipment._id);

      if (flg) {
        reloadFunction();
        setMaintenance({ open: false, data: null });
      }
      setOpen({ open: false });
      notification["success"]({
        message: `El mantenimiento se ${
          flg ? "actualizó" : "guardó"
        } correctamente`,
      });
    } catch (error) {
      notification["error"]({
        message: `Oops!`,
        description: `Ocurrió un error al procesar la información.`,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChangeTF = (index) => {
    tipoFalla[index].check = !tipoFalla[index].check;
    setTipoFalla([...tipoFalla]);
  };

  const handleAddActions = () => {
    actions.push("");
    setActions([...actions]);
  };

  const handleChangeText = (value, index) => {
    actions[index] = value;
    setActions([...actions]);
  };

  const handleRemoveAction = (index) => {
    actions.splice(index, 1);
    setActions([...actions]);
  };

  // RECURSOS

  const hndRecursos = (value, name, index) => {
    rcrss[index][name] = value;
    setRcrss([...rcrss]);
  };

  const hndAddRecursos = () => {
    rcrss.push({
      code: "",
      type: "Ejecutor",
      name: "",
      caract: "",
      und_m: "",
      cant: "",
      vlr_u: "",
      total: "",
    });
    setRcrss([...rcrss]);
  };

  const hndRemoveRecursos = (index) => {
    rcrss.splice(index, 1);
    setRcrss([...rcrss]);
  };

  // RECURSOS HUMANOS

  const hndRRHH = (value, name, index) => {
    rrhh[index][name] = value;
    setRrhh([...rrhh]);
  };

  const hndAddRRHH = () => {
    rrhh.push({
      code: "",
      name: "",
      price_hour: "",
      hours: "",
      total: "",
    });
    setRrhh([...rrhh]);
  };

  const hndRemoveRRHH = (index) => {
    rrhh.splice(index, 1);
    setRrhh([...rrhh]);
  };

  return (
    <Dialog open={open} fullScreen>
      <DialogTitle>
        <Typography align="center" variant="h5" component="p">
          <b>{flg ? "ACTUALIZAR" : "REGISTRAR"} MANTENIMIENTO</b>
        </Typography>
      </DialogTitle>
      <Spin spinning={loading}>
        <form onSubmit={handleSubmit(sendRegister)} autoComplete="off">
          <DialogContent>
            <Container maxWidth="lg">
              <Paper elevation={5}>
                <Box p={5}>
                  <Grid container spacing={2}>
                    {!flg && (
                      <Grid item xs={12}>
                        <FormControl fullWidth>
                          <InputLabel>
                            {equipment.dates.length > 0
                              ? "FECHA DE MANTENIMIENTO"
                              : "NO HAY FECHAS DE MANTENIMIENTO REGISTRADAS"}
                          </InputLabel>
                          {equipment.dates.length > 0 && (
                            <Select
                              value={date}
                              onChange={(e) => setDate(e.target.value)}
                            >
                              {equipment.dates.map(
                                (el, i) =>
                                  el.status && (
                                    <MenuItem key={i} value={el.date}>
                                      {el.date}
                                    </MenuItem>
                                  )
                              )}
                            </Select>
                          )}
                        </FormControl>
                      </Grid>
                    )}
                    {(date || flg) && (
                      <Fragment>
                        <Title
                          title="3. DATOS DE LA SOLICITUD"
                          helper={
                            <span>
                              (solo para actividades no programadas){" "}
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    checked={programmed}
                                    onChange={(a, b) => setProgrammed(b)}
                                  />
                                }
                                label={programmed ? "SI" : "NO"}
                              />{" "}
                            </span>
                          }
                        />
                        {programmed ? (
                          <Fragment>
                            <Grid item xs={12} sm={12} md={4} lg={6}>
                              <TextField
                                label="Descripción del problema"
                                fullWidth
                                defaultValue={flg ? data.description : ""}
                                error={Boolean(errors?.description ?? false)}
                                {...register("description", { required: true })}
                              />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={3}>
                              <TextField
                                label="Fecha de petición"
                                fullWidth
                                type="date"
                                defaultValue={flg ? data.date_request : ""}
                                error={Boolean(errors?.date_request ?? false)}
                                {...register("date_request", {
                                  required: true,
                                })}
                                InputLabelProps={{ shrink: true }}
                              />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={3}>
                              <TextField
                                label="Fecha de conformidad"
                                fullWidth
                                type="date"
                                defaultValue={flg ? data.date_conformidad : ""}
                                error={Boolean(
                                  errors?.date_conformidad ?? false
                                )}
                                {...register("date_conformidad", {
                                  required: true,
                                })}
                                InputLabelProps={{ shrink: true }}
                              />
                            </Grid>
                          </Fragment>
                        ) : null}
                        <Title title="4. DATOS DE DIAGNOSTICO Y PROGRAMACIÓN" />
                        <Grid item xs={12}>
                          <TextField
                            label="Diagnostico de falla"
                            fullWidth
                            defaultValue={flg ? data.diagnostico : ""}
                            error={Boolean(errors?.diagnostico ?? false)}
                            {...register("diagnostico", { required: true })}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={8} lg={9}>
                          <TextField
                            label="Ejecutor del mantenimiento"
                            fullWidth
                            defaultValue={
                              flg ? data.ejecutor_mantenimiento : ""
                            }
                            error={Boolean(
                              errors?.ejecutor_mantenimiento ?? false
                            )}
                            {...register("ejecutor_mantenimiento", {
                              required: true,
                            })}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                          <TextField
                            label="Fecha programada"
                            fullWidth
                            type="date"
                            defaultValue={flg ? data.date_programmed : ""}
                            error={Boolean(errors?.date_programmed ?? false)}
                            InputLabelProps={{ shrink: true }}
                            {...register("date_programmed", { required: true })}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <FormControl component="fieldset">
                            <FormLabel component="legend">
                              Estado Inicial
                            </FormLabel>
                            <RadioGroup
                              row
                              value={statusStart}
                              onChange={(a, b) => setStatusStart(b)}
                            >
                              {statusList.map((el, index) => (
                                <FormControlLabel
                                  key={index}
                                  value={el}
                                  control={<Radio />}
                                  label={el}
                                />
                              ))}
                            </RadioGroup>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                          <FormControl component="fieldset" variant="standard">
                            <FormLabel component="legend">
                              Tipo de falla
                            </FormLabel>
                            <FormGroup row>
                              {tipoFalla.map((el, index) => (
                                <FormControlLabel
                                  key={index}
                                  control={
                                    <Checkbox
                                      checked={el.check}
                                      onChange={() => handleChangeTF(index)}
                                      name={el.label}
                                    />
                                  }
                                  label={el.label}
                                />
                              ))}
                            </FormGroup>
                          </FormControl>
                        </Grid>
                        <Title title="5. DATOS GENERALES DE LA ORDEN DEL TRABAJO DE MANTENIMIENTO" />
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                          <FormControl component="fieldset">
                            <FormLabel component="legend">
                              Tipo de mantenimiento
                            </FormLabel>
                            <RadioGroup
                              value={tipo_mantenimiento}
                              onChange={(a, b) => setTipo_mantenimiento(b)}
                            >
                              {listTM.map((el, index) => (
                                <FormControlLabel
                                  key={index}
                                  value={el}
                                  control={<Radio />}
                                  label={el}
                                />
                              ))}
                            </RadioGroup>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                          <FormControl component="fieldset">
                            <FormLabel component="legend">Tipo OTM</FormLabel>
                            <RadioGroup
                              value={otm}
                              onChange={(a, b) => setOtm(b)}
                            >
                              {listOTM.map((el, index) => (
                                <FormControlLabel
                                  key={index}
                                  value={el}
                                  control={<Radio />}
                                  label={el}
                                />
                              ))}
                            </RadioGroup>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                          <FormControl component="fieldset">
                            <FormLabel component="legend">Prioridad</FormLabel>
                            <RadioGroup
                              value={prioridad}
                              onChange={(a, b) => setPrioridad(b)}
                            >
                              {listPrioridad.map((el, index) => (
                                <FormControlLabel
                                  key={index}
                                  value={el}
                                  control={<Radio />}
                                  label={el}
                                />
                              ))}
                            </RadioGroup>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                          <FormControl component="fieldset">
                            <FormLabel component="legend">
                              Tipo de atención
                            </FormLabel>
                            <RadioGroup
                              value={tAtencion}
                              onChange={(a, b) => setTAtencion(b)}
                            >
                              {listTipoAtencion.map((el, index) => (
                                <FormControlLabel
                                  key={index}
                                  value={el}
                                  control={<Radio />}
                                  label={el}
                                />
                              ))}
                            </RadioGroup>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                          <FormControl component="fieldset">
                            <FormLabel component="legend">
                              Tipo de equipamiento
                            </FormLabel>
                            <RadioGroup
                              value={tEquipamento}
                              onChange={(a, b) => setTEquipamento(b)}
                            >
                              {listTipoEquipamiento.map((el, index) => (
                                <FormControlLabel
                                  key={index}
                                  value={el}
                                  control={<Radio />}
                                  label={el}
                                />
                              ))}
                            </RadioGroup>
                          </FormControl>
                        </Grid>
                        <Title title="6. DATOS GENERALES DE LA EJECUCIÓN" />
                        <Grid item xs={12}>
                          <List
                            subheader={
                              <ListSubheader>
                                ACTIVIDADES EJECUTADAS
                              </ListSubheader>
                            }
                            dense
                          >
                            {actions.map((el, index) => (
                              <ListItem key={index} dense>
                                <ListItemText
                                  primary={
                                    <TextField
                                      variant="outlined"
                                      value={el}
                                      fullWidth
                                      label={`Actividad ${index + 1}`}
                                      size="small"
                                      onChange={(e) =>
                                        handleChangeText(e.target.value, index)
                                      }
                                      InputProps={{
                                        endAdornment: (
                                          <InputAdornment position="end">
                                            <IconButton
                                              size="small"
                                              onClick={() =>
                                                handleRemoveAction(index)
                                              }
                                            >
                                              <CloseIcon color="error" />
                                            </IconButton>
                                          </InputAdornment>
                                        ),
                                      }}
                                    />
                                  }
                                />
                              </ListItem>
                            ))}
                            <div align="center">
                              <Button
                                variant="contained"
                                onClick={handleAddActions}
                              >
                                AGREGAR
                              </Button>
                            </div>
                          </List>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          sm={6}
                          md={4}
                          lg={3}
                          container
                          alignItems="center"
                        >
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={garantia}
                                onChange={(a, b) => setGarantia(b)}
                              />
                            }
                            label="Garantía en meses"
                          />
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          sm={6}
                          md={4}
                          lg={3}
                          container
                          alignItems="center"
                        >
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={interrupcion}
                                onChange={(a, b) => setInterrupcion(b)}
                              />
                            }
                            label="Interrupción al servicio"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                          <TextField
                            label="Fecha de inicio"
                            fullWidth
                            type="datetime-local"
                            defaultValue={flg ? data.datetime_start : ""}
                            error={Boolean(errors?.datetime_start ?? false)}
                            InputLabelProps={{ shrink: true }}
                            {...register("datetime_start", { required: true })}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                          <TextField
                            label="Fecha de finalización"
                            fullWidth
                            type="datetime-local"
                            defaultValue={flg ? data.datetime_end : ""}
                            error={Boolean(errors?.datetime_end ?? false)}
                            InputLabelProps={{ shrink: true }}
                            {...register("datetime_end", { required: true })}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <FormControl component="fieldset">
                            <FormLabel component="legend">
                              Estado de finalización
                            </FormLabel>
                            <RadioGroup
                              row
                              value={statusEnd}
                              onChange={(a, b) => setStatusEnd(b)}
                            >
                              {statusList.map((el, index) => (
                                <FormControlLabel
                                  key={index}
                                  value={el}
                                  control={<Radio />}
                                  label={el}
                                />
                              ))}
                            </RadioGroup>
                          </FormControl>
                        </Grid>

                        <Title title="7. DATOS DE LOS REPUESTOS (Partes, accesorios y materiales)" />
                        <ListSubheader>
                          DESCRIPCIÓN DE RECURSOS MATERIALES
                        </ListSubheader>
                        <Grid item xs={12}>
                          {rcrss.map((el, i) => (
                            <Card variant="outlined" key={i}>
                              <CardContent>
                                <Grid container>
                                  <Grid
                                    item
                                    style={{ width: "calc((100%) - 40px)" }}
                                  >
                                    <Grid container spacing={1}>
                                      <Grid item xs={12} sm={6} md={4} lg={3}>
                                        <TextField
                                          variant="outlined"
                                          value={el.code}
                                          onChange={(e) =>
                                            hndRecursos(
                                              e.target.value,
                                              "code",
                                              i
                                            )
                                          }
                                          fullWidth
                                          label="Código de repuesto (ESSALUD)"
                                          size="small"
                                        />
                                      </Grid>
                                      <Grid item xs={12} sm={6} md={4} lg={3}>
                                        <FormControl
                                          variant="outlined"
                                          fullWidth
                                          size="small"
                                        >
                                          <InputLabel>
                                            Tipo Adquisición
                                          </InputLabel>
                                          <Select
                                            label="Tipo Adquisición"
                                            value={el.type}
                                            onChange={(e) =>
                                              hndRecursos(
                                                e.target.value,
                                                "type",
                                                i
                                              )
                                            }
                                          >
                                            <MenuItem value="Ejecutor">
                                              Ejecutor
                                            </MenuItem>
                                            <MenuItem value="Almacén">
                                              Almacén
                                            </MenuItem>
                                            <MenuItem value="Caja Chica">
                                              Caja Chica
                                            </MenuItem>
                                          </Select>
                                        </FormControl>
                                      </Grid>
                                      <Grid item xs={12} sm={6} md={4} lg={3}>
                                        <TextField
                                          variant="outlined"
                                          value={el.name}
                                          onChange={(e) =>
                                            hndRecursos(
                                              e.target.value,
                                              "name",
                                              i
                                            )
                                          }
                                          fullWidth
                                          label="Nombre"
                                          size="small"
                                        />
                                      </Grid>
                                      <Grid item xs={12} sm={6} md={4} lg={3}>
                                        <TextField
                                          variant="outlined"
                                          value={el.caract}
                                          onChange={(e) =>
                                            hndRecursos(
                                              e.target.value,
                                              "caract",
                                              i
                                            )
                                          }
                                          fullWidth
                                          label="Caracterísctica técnicas"
                                          size="small"
                                        />
                                      </Grid>
                                      <Grid item xs={12} sm={6} md={4} lg={3}>
                                        <TextField
                                          variant="outlined"
                                          value={el.und_m}
                                          onChange={(e) =>
                                            hndRecursos(
                                              e.target.value,
                                              "und_m",
                                              i
                                            )
                                          }
                                          fullWidth
                                          label="Unidad de medida"
                                          size="small"
                                        />
                                      </Grid>
                                      <Grid item xs={12} sm={6} md={4} lg={3}>
                                        <TextField
                                          variant="outlined"
                                          value={el.cant}
                                          onChange={(e) => {
                                            hndRecursos(
                                              e.target.value,
                                              "cant",
                                              i
                                            );
                                            hndRecursos(
                                              Number(el.cant) *
                                                Number(el.vlr_u),
                                              "total",
                                              i
                                            );
                                          }}
                                          fullWidth
                                          type="number"
                                          label="Cantidad"
                                          size="small"
                                        />
                                      </Grid>
                                      <Grid item xs={12} sm={6} md={4} lg={3}>
                                        <TextField
                                          variant="outlined"
                                          value={el.vlr_u}
                                          type="number"
                                          onChange={(e) => {
                                            hndRecursos(
                                              e.target.value,
                                              "vlr_u",
                                              i
                                            );
                                            hndRecursos(
                                              Number(el.cant) *
                                                Number(el.vlr_u),
                                              "total",
                                              i
                                            );
                                          }}
                                          fullWidth
                                          label="Valor Unitario"
                                          size="small"
                                        />
                                      </Grid>
                                      <Grid item xs={12} sm={6} md={4} lg={3}>
                                        <TextField
                                          variant="outlined"
                                          value={el.total ? el.total : ""}
                                          disabled
                                          fullWidth
                                          label="Total"
                                          size="small"
                                        />
                                      </Grid>
                                    </Grid>
                                  </Grid>
                                  <Grid
                                    item
                                    style={{ width: 40 }}
                                    container
                                    justifyContent="center"
                                    alignItems="center"
                                  >
                                    <IconButton
                                      size="small"
                                      onClick={() => hndRemoveRecursos(i)}
                                    >
                                      <CloseIcon color="error" />
                                    </IconButton>
                                  </Grid>
                                </Grid>
                              </CardContent>
                            </Card>
                          ))}
                          <div align="center">
                            <Button
                              variant="contained"
                              onClick={hndAddRecursos}
                            >
                              AGREGAR
                            </Button>
                          </div>
                        </Grid>

                        <Title title="8. DATOS DE LA MANO DE OBRA" />
                        <ListSubheader>
                          DESCRIPCIÓN DE RECURSOS HUMANOS
                        </ListSubheader>
                        <Grid item xs={12}>
                          {rrhh.map((el, i) => (
                            <Card variant="outlined" key={i}>
                              <CardContent>
                                <Grid container>
                                  <Grid
                                    item
                                    style={{ width: "calc((100%) - 40px)" }}
                                  >
                                    <Grid container spacing={1}>
                                      <Grid item xs={12} sm={6} md={6} lg={3}>
                                        <TextField
                                          variant="outlined"
                                          value={el.code}
                                          onChange={(e) =>
                                            hndRRHH(e.target.value, "code", i)
                                          }
                                          fullWidth
                                          label="Código del personal"
                                          size="small"
                                        />
                                      </Grid>
                                      <Grid item xs={12} sm={6} md={6} lg={3}>
                                        <TextField
                                          variant="outlined"
                                          value={el.name}
                                          onChange={(e) =>
                                            hndRRHH(e.target.value, "name", i)
                                          }
                                          fullWidth
                                          label="Nombre del personal"
                                          size="small"
                                        />
                                      </Grid>
                                      <Grid item xs={12} sm={6} md={4} lg={2}>
                                        <TextField
                                          variant="outlined"
                                          type="number"
                                          value={el.price_hour}
                                          onChange={(e) => {
                                            hndRRHH(
                                              e.target.value,
                                              "price_hour",
                                              i
                                            );
                                            hndRRHH(
                                              Number(el.price_hour) *
                                                Number(el.hours),
                                              "total",
                                              i
                                            );
                                          }}
                                          fullWidth
                                          label="Costo x hora"
                                          size="small"
                                        />
                                      </Grid>
                                      <Grid item xs={12} sm={6} md={4} lg={2}>
                                        <TextField
                                          variant="outlined"
                                          value={el.hours}
                                          type="number"
                                          onChange={(e) => {
                                            hndRRHH(e.target.value, "hours", i);
                                            hndRRHH(
                                              Number(el.price_hour) *
                                                Number(el.hours),
                                              "total",
                                              i
                                            );
                                          }}
                                          fullWidth
                                          label="Horas"
                                          size="small"
                                        />
                                      </Grid>
                                      <Grid item xs={12} sm={12} md={4} lg={2}>
                                        <TextField
                                          variant="outlined"
                                          value={el.total}
                                          disabled
                                          fullWidth
                                          type="number"
                                          label="Total"
                                          size="small"
                                        />
                                      </Grid>
                                    </Grid>
                                  </Grid>
                                  <Grid
                                    item
                                    style={{ width: 40 }}
                                    container
                                    justifyContent="center"
                                    alignItems="center"
                                  >
                                    <IconButton
                                      size="small"
                                      onClick={() => hndRemoveRRHH(i)}
                                    >
                                      <CloseIcon color="error" />
                                    </IconButton>
                                  </Grid>
                                </Grid>
                              </CardContent>
                            </Card>
                          ))}
                          <div align="center">
                            <Button variant="contained" onClick={hndAddRRHH}>
                              AGREGAR
                            </Button>
                          </div>
                        </Grid>

                        <Grid item xs={12}>
                          <TextField
                            label="Gastos adicionales"
                            fullWidth
                            type="number"
                            inputProps={{ step: 0.01, min: 0 }}
                            defaultValue={flg ? data.aditional : ""}
                            error={Boolean(errors?.aditional ?? false)}
                            InputLabelProps={{ shrink: true }}
                            {...register("aditional", { required: true })}
                          />
                        </Grid>
                      </Fragment>
                    )}
                  </Grid>
                </Box>
              </Paper>
            </Container>
          </DialogContent>
          <DialogActions>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => setOpen(false)}
            >
              CANCELAR
            </Button>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={!Boolean(date || (flg && true))}
            >
              GUARDAR
            </Button>
          </DialogActions>
        </form>
      </Spin>
    </Dialog>
  );
};

export default ModalMaintenance;

const Title = ({ title, helper }) => {
  return (
    <Grid item xs={12}>
      <Typography variant="subtitle1">
        <b> {title} </b> {helper}
      </Typography>
      <Divider />
    </Grid>
  );
};
