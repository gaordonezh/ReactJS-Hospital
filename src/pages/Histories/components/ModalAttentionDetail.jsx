import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  Button,
  Grid,
  TextField,
  Typography,
  Divider,
  FormHelperText,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  DialogActions,
} from "@mui/material";
import { Spin, notification } from "antd";
import { useForm } from "react-hook-form";
import { putAttentions } from "requests";
import moment from "moment-timezone";

const ModalAttentions = (props) => {
  const { open, setOpen, setLoading, data, loading, reloadFunction } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {
    date,
    ult_viaje,

    dm,
    hta,
    fimicos,
    lueticos,
    cancer,
    otros,
    patologia,
    // ANTECEDENTES FAMILIARES
    menarca,
    rc,
    upm,
    menopausia,
    anticonceptivo,
    irs,
    n_parejas,
    paridad,
    tipo_parto,
    pap,
    colposcopia,
    mamografia,
    eco_mama,
    bi_rads,
    alergias,
    antecedentes_quirugicos,
    // MOTIVO CONSULTA
    motivo,
    enfermedad_actual,
    tiempo_enfermedad,
    // OTHER PART
    pa,
    fc,
    fr,
    sat,
    t,
    diuresis,
    agp,
    peso,
    talla,
    imc,
    tcsc,
    piel,
    ar,
    cv,
    neurologico,
    urinario,
    mamas,
    // OTHER
    peritoneales,
    rha,
    dolor_localizado,
    masas,
    // OTHER
    c_vaginal,
    cervix,
    oce,
    mov,
    lesiones,
    tamano,
    movil,
    consistencia,
    dolor,
    superficie,
    anexos,
    // DIAGNOSTICOS
    diagnosticos,
    plantratamiento_result,
    recomendaciones_result,
    // OTHER
    alta_result,

    history: { history_code },
    quote: { patient, status, urgency, _id: quoteId },
    _id,
  } = data;

  const [mnps, setMnps] = useState(menopausia ? menopausia : "NO");
  const [ptnls, setPtnls] = useState(peritoneales ? peritoneales : "NO");
  const [oceState, setOceState] = useState(oce ? oce : "Cerrados");
  const [movState, setMovState] = useState(mov ? mov : "NO");
  const [movilState, setMovilState] = useState(movil ? movil : "NO");
  const [dolorState, setDolorState] = useState(dolor ? dolor : "NO");

  const updateRegister = async (items) => {
    setLoading(true);
    try {
      items["quoteId"] = quoteId;
      items["menopausia"] = mnps;
      items["peritoneales"] = ptnls;
      items["oce"] = oceState;
      items["mov"] = movState;
      items["movil"] = movilState;
      items["dolor"] = dolorState;

      await putAttentions(items, _id);

      reloadFunction();
      notification["success"]({
        message: `La atención se registró correctamente.`,
      });
      setOpen({ open: false });
    } catch (error) {
      notification["error"]({
        message: `Ocurrió un error al guardar la atención. ${error}`,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} fullScreen>
      <Spin spinning={loading}>
        <form onSubmit={handleSubmit(updateRegister)} autoComplete="off">
          <DialogContent>
            <Grid container spacing={1} justifyContent="space-between">
              <Grid item>
                <Title title={`HISTORIA CLÍNICA N° ${history_code}`} />
              </Grid>
              <Grid item>
                <Title
                  title={`FECHA DE ATENCIÓN ${moment(date).format(
                    "DD/MM/YYYY"
                  )}`}
                />
              </Grid>

              <Content title="FILIACIÓN">
                <Grid container spacing={1}>
                  <Grid item xs={12} sm={6} md={8}>
                    <Text
                      title="Paciente"
                      value={`${patient.f_name} ${patient.l_name}`}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <Text title={patient.t_doc} value={patient.n_doc} />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <Text
                      title="Fecha de nacimiento"
                      value={patient.date_born}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <Text title="Correo" value={patient.email} />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <Text title="Ocupación" value={patient.ocupacion} />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <Text title="Celular" value={patient.phone} />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <Text title="Sexo" value={patient.sex} />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <Text
                      title="Dirección"
                      value={`${patient.ubigeo.address} ${patient.ubigeo.district}`}
                    />
                  </Grid>
                </Grid>
              </Content>

              <Content title="ANTECEDENTES HEREDO - FAMILIARES">
                <Grid container spacing={1}>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <TextField
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      size="small"
                      label="DM"
                      defaultValue={dm}
                      error={Boolean(errors?.dm ?? false)}
                      {...register("dm", { required: false })}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <TextField
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      size="small"
                      label="HTA"
                      defaultValue={hta}
                      error={Boolean(errors?.hta ?? false)}
                      {...register("hta", { required: false })}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <TextField
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      size="small"
                      label="Fímicos (TB)"
                      defaultValue={fimicos}
                      error={Boolean(errors?.fimicos ?? false)}
                      {...register("fimicos", { required: false })}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <TextField
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      size="small"
                      label="Luéticos"
                      defaultValue={lueticos}
                      error={Boolean(errors?.lueticos ?? false)}
                      {...register("lueticos", { required: false })}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <TextField
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      size="small"
                      label="Cáncer"
                      defaultValue={cancer}
                      error={Boolean(errors?.cancer ?? false)}
                      {...register("cancer", { required: false })}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <TextField
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      size="small"
                      label="Otros"
                      defaultValue={otros}
                      error={Boolean(errors?.otros ?? false)}
                      {...register("otros", { required: false })}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <TextField
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      size="small"
                      label="Especificar patología - parentesco"
                      defaultValue={patologia}
                      error={Boolean(errors?.patologia ?? false)}
                      {...register("patologia", { required: false })}
                    />
                  </Grid>
                </Grid>
              </Content>

              <Content title="ANTECEDENTES PERSONALES">
                <Grid container spacing={1}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      size="small"
                      label="Menarca"
                      defaultValue={menarca}
                      error={Boolean(errors?.menarca ?? false)}
                      {...register("menarca", { required: false })}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      size="small"
                      label="RC [Reg|Irreg]"
                      defaultValue={rc}
                      error={Boolean(errors?.rc ?? false)}
                      {...register("rc", { required: false })}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <TextField
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      size="small"
                      label="UPM"
                      defaultValue={upm}
                      error={Boolean(errors?.upm ?? false)}
                      {...register("upm", { required: false })}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <FormControl fullWidth variant="outlined" size="small">
                      <InputLabel>Menopausia</InputLabel>
                      <Select
                        label="Menopausia"
                        value={mnps}
                        onChange={(e) => setMnps(e.target.value)}
                      >
                        <MenuItem value="SI">SI</MenuItem>
                        <MenuItem value="NO">NO</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <TextField
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      size="small"
                      label="Método anticonceptivo"
                      defaultValue={anticonceptivo}
                      error={Boolean(errors?.anticonceptivo ?? false)}
                      {...register("anticonceptivo", { required: false })}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <TextField
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      size="small"
                      label="IRS"
                      defaultValue={irs}
                      error={Boolean(errors?.irs ?? false)}
                      {...register("irs", { required: false })}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <TextField
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      size="small"
                      label="Nro parejas"
                      defaultValue={n_parejas}
                      error={Boolean(errors?.n_parejas ?? false)}
                      {...register("n_parejas", { required: false })}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <TextField
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      size="small"
                      label="Paridad"
                      defaultValue={paridad}
                      error={Boolean(errors?.paridad ?? false)}
                      {...register("paridad", { required: false })}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <TextField
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      size="small"
                      label="Tipo de partos"
                      defaultValue={tipo_parto}
                      error={Boolean(errors?.tipo_parto ?? false)}
                      {...register("tipo_parto", { required: false })}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <TextField
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      size="small"
                      label="PAP"
                      defaultValue={pap}
                      error={Boolean(errors?.pap ?? false)}
                      {...register("pap", {
                        required: false,
                      })}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <TextField
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      size="small"
                      label="Colposcopia"
                      defaultValue={colposcopia}
                      error={Boolean(errors?.colposcopia ?? false)}
                      {...register("colposcopia", {
                        required: false,
                      })}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <TextField
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      size="small"
                      label="Mamografía"
                      defaultValue={mamografia}
                      error={Boolean(errors?.mamografia ?? false)}
                      {...register("mamografia", {
                        required: false,
                      })}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <TextField
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      size="small"
                      label="Eco Mama"
                      defaultValue={eco_mama}
                      error={Boolean(errors?.eco_mama ?? false)}
                      {...register("eco_mama", {
                        required: false,
                      })}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <TextField
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      size="small"
                      label="Bi-rads"
                      defaultValue={bi_rads}
                      error={Boolean(errors?.bi_rads ?? false)}
                      {...register("bi_rads", {
                        required: false,
                      })}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      size="small"
                      label="Alergias"
                      defaultValue={alergias}
                      error={Boolean(errors?.alergias ?? false)}
                      {...register("alergias", {
                        required: false,
                      })}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      size="small"
                      label="Antecedentes quirurgicos"
                      defaultValue={antecedentes_quirugicos}
                      error={Boolean(errors?.antecedentes_quirugicos ?? false)}
                      {...register("antecedentes_quirugicos", {
                        required: false,
                      })}
                    />
                  </Grid>
                </Grid>
              </Content>

              <Content title="MOTIVO DE LA CONSULTA">
                <TextField
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  size="small"
                  label="-"
                  multiline
                  minRows={3}
                  defaultValue={motivo}
                  error={Boolean(errors?.motivo ?? false)}
                  {...register("motivo", {
                    required: false,
                  })}
                />
              </Content>

              <Content title="ENFERMEDAD ACTUAL">
                <TextField
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  size="small"
                  label="-"
                  multiline
                  minRows={3}
                  defaultValue={enfermedad_actual}
                  error={Boolean(errors?.enfermedad_actual ?? false)}
                  {...register("enfermedad_actual", {
                    required: false,
                  })}
                />
              </Content>

              <Content title="EXAMEN FÍSICO">
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Divider />
                    <Typography>FV</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <TextField
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      size="small"
                      label="PA"
                      defaultValue={pa}
                      error={Boolean(errors?.pa ?? false)}
                      {...register("pa", {
                        required: false,
                      })}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <TextField
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      size="small"
                      label="FC"
                      defaultValue={fc}
                      error={Boolean(errors?.fc ?? false)}
                      {...register("fc", {
                        required: false,
                      })}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <TextField
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      size="small"
                      label="FR"
                      defaultValue={fr}
                      error={Boolean(errors?.fr ?? false)}
                      {...register("fr", {
                        required: false,
                      })}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <TextField
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      size="small"
                      label="Sat O2"
                      defaultValue={sat}
                      error={Boolean(errors?.sat ?? false)}
                      {...register("sat", {
                        required: false,
                      })}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <TextField
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      size="small"
                      label="T"
                      defaultValue={t}
                      error={Boolean(errors?.t ?? false)}
                      {...register("t", {
                        required: false,
                      })}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <TextField
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      size="small"
                      label="Diuresis"
                      defaultValue={diuresis}
                      error={Boolean(errors?.diuresis ?? false)}
                      {...register("diuresis", {
                        required: false,
                      })}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <TextField
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      size="small"
                      label="AGP"
                      defaultValue={agp}
                      error={Boolean(errors?.agp ?? false)}
                      {...register("agp", {
                        required: false,
                      })}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <TextField
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      size="small"
                      label="Peso"
                      defaultValue={peso}
                      error={Boolean(errors?.peso ?? false)}
                      {...register("peso", {
                        required: false,
                      })}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <TextField
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      size="small"
                      label="Talla"
                      defaultValue={talla}
                      error={Boolean(errors?.talla ?? false)}
                      {...register("talla", {
                        required: false,
                      })}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <TextField
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      size="small"
                      label="IMC"
                      defaultValue={imc}
                      error={Boolean(errors?.imc ?? false)}
                      {...register("imc", {
                        required: false,
                      })}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <TextField
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      size="small"
                      label="TCSC"
                      defaultValue={tcsc}
                      error={Boolean(errors?.tcsc ?? false)}
                      {...register("tcsc", {
                        required: false,
                      })}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <TextField
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      size="small"
                      label="Piel"
                      defaultValue={piel}
                      error={Boolean(errors?.piel ?? false)}
                      {...register("piel", {
                        required: false,
                      })}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <TextField
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      size="small"
                      label="AR"
                      defaultValue={ar}
                      error={Boolean(errors?.ar ?? false)}
                      {...register("ar", {
                        required: false,
                      })}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <TextField
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      size="small"
                      label="CV"
                      defaultValue={cv}
                      error={Boolean(errors?.cv ?? false)}
                      {...register("cv", {
                        required: false,
                      })}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <TextField
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      size="small"
                      label="Neurológico"
                      defaultValue={neurologico}
                      error={Boolean(errors?.neurologico ?? false)}
                      {...register("neurologico", {
                        required: false,
                      })}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <TextField
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      size="small"
                      label="Urinario"
                      defaultValue={urinario}
                      error={Boolean(errors?.urinario ?? false)}
                      {...register("urinario", {
                        required: false,
                      })}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <TextField
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      size="small"
                      label="Mamas"
                      defaultValue={mamas}
                      error={Boolean(errors?.mamas ?? false)}
                      {...register("mamas", {
                        required: false,
                      })}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Divider />
                    <Typography>Abdomen</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <FormControl fullWidth variant="outlined" size="small">
                      <InputLabel>Signos peritoneales</InputLabel>
                      <Select
                        label="Signos peritoneales"
                        value={ptnls}
                        onChange={(e) => setPtnls(e.target.value)}
                      >
                        <MenuItem value="SI">SI</MenuItem>
                        <MenuItem value="NO">NO</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <TextField
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      size="small"
                      label="RHA"
                      defaultValue={rha}
                      error={Boolean(errors?.rha ?? false)}
                      {...register("rha", {
                        required: false,
                      })}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <TextField
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      size="small"
                      label="Dolor localizado"
                      defaultValue={dolor_localizado}
                      error={Boolean(errors?.dolor_localizado ?? false)}
                      {...register("dolor_localizado", {
                        required: false,
                      })}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <TextField
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      size="small"
                      label="Masas"
                      defaultValue={masas}
                      error={Boolean(errors?.masas ?? false)}
                      {...register("masas", {
                        required: false,
                      })}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Divider />
                    <Typography>Examen genital</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <TextField
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      size="small"
                      label="Canal vaginal"
                      defaultValue={c_vaginal}
                      error={Boolean(errors?.c_vaginal ?? false)}
                      {...register("c_vaginal", {
                        required: false,
                      })}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <TextField
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      size="small"
                      label="Cérvix"
                      defaultValue={cervix}
                      error={Boolean(errors?.cervix ?? false)}
                      {...register("cervix", {
                        required: false,
                      })}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <FormControl fullWidth variant="outlined" size="small">
                      <InputLabel>OCE/OCI</InputLabel>
                      <Select
                        label="OCE/OCI"
                        value={oceState}
                        onChange={(e) => setOceState(e.target.value)}
                      >
                        <MenuItem value="Abiertos">Abiertos</MenuItem>
                        <MenuItem value="Cerrados">Cerrados</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <FormControl fullWidth variant="outlined" size="small">
                      <InputLabel>Dolor a la mov</InputLabel>
                      <Select
                        label="Dolor de la mov"
                        value={movState}
                        onChange={(e) => setMovState(e.target.value)}
                      >
                        <MenuItem value="SI">SI</MenuItem>
                        <MenuItem value="NO">NO</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <TextField
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      size="small"
                      label="Lesiones"
                      defaultValue={lesiones}
                      error={Boolean(errors?.lesiones ?? false)}
                      {...register("lesiones", {
                        required: false,
                      })}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Divider />
                    <Typography>Útero</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <TextField
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      size="small"
                      label="Tamaño"
                      defaultValue={tamano}
                      error={Boolean(errors?.tamano ?? false)}
                      {...register("tamano", {
                        required: false,
                      })}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <FormControl fullWidth variant="outlined" size="small">
                      <InputLabel>Móvil</InputLabel>
                      <Select
                        label="Móvil"
                        value={movilState}
                        onChange={(e) => setMovilState(e.target.value)}
                      >
                        <MenuItem value="SI">SI</MenuItem>
                        <MenuItem value="NO">NO</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <TextField
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      size="small"
                      label="Consistencia"
                      defaultValue={consistencia}
                      error={Boolean(errors?.consistencia ?? false)}
                      {...register("consistencia", {
                        required: false,
                      })}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <FormControl fullWidth variant="outlined" size="small">
                      <InputLabel>Dolor</InputLabel>
                      <Select
                        label="Dolor"
                        value={dolorState}
                        onChange={(e) => setDolorState(e.target.value)}
                      >
                        <MenuItem value="SI">SI</MenuItem>
                        <MenuItem value="NO">NO</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <TextField
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      size="small"
                      label="Superficie"
                      defaultValue={superficie}
                      error={Boolean(errors?.superficie ?? false)}
                      {...register("superficie", {
                        required: false,
                      })}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <TextField
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      size="small"
                      label="Anexos"
                      defaultValue={anexos}
                      error={Boolean(errors?.anexos ?? false)}
                      {...register("anexos", {
                        required: false,
                      })}
                    />
                  </Grid>
                </Grid>
              </Content>

              <Content title="DIAGNÓSTICOS">
                <TextField
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  size="small"
                  label="-"
                  multiline
                  minRows={3}
                  defaultValue={diagnosticos}
                  error={Boolean(errors?.diagnosticos ?? false)}
                  {...register("diagnosticos", {
                    required: false,
                  })}
                />
              </Content>

              <Content title="PLAN DE TRABAJO">
                <TextField
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  size="small"
                  label="-"
                  multiline
                  minRows={3}
                  defaultValue={plantratamiento_result}
                  error={Boolean(errors?.plantratamiento_result ?? false)}
                  {...register("plantratamiento_result", {
                    required: false,
                  })}
                />
              </Content>

              <Content title="RECOMENDACIONES">
                <TextField
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  size="small"
                  label="-"
                  multiline
                  minRows={3}
                  defaultValue={recomendaciones_result}
                  error={Boolean(errors?.recomendaciones_result ?? false)}
                  {...register("recomendaciones_result", {
                    required: false,
                  })}
                />
              </Content>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button
              size="large"
              variant="outlined"
              color="secondary"
              onClick={() => setOpen(false)}
              disabled={loading}
            >
              CANCELAR
            </Button>{" "}
            <Button
              size="large"
              color="primary"
              variant="contained"
              type="submit"
            >
              GUARDAR
            </Button>
          </DialogActions>
        </form>
      </Spin>
    </Dialog>
  );
};

export default ModalAttentions;

const Text = ({ title, value }) => {
  return (
    <Typography component="p" variant="body1">
      <b>{title}</b>
      {" • "}
      <FormHelperText component="span">{value}</FormHelperText>
      <Divider />
    </Typography>
  );
};

const Title = ({ title }) => {
  return (
    <Typography variant="h5">
      <b>{title}</b>
      <Divider />
    </Typography>
  );
};

const Content = ({ title, children }) => {
  return (
    <Grid container justifyContent="flex-end" spacing={1}>
      <Grid item xs={12}>
        <Typography variant="subtitle1">
          <b>{title}</b>
        </Typography>
      </Grid>
      <Grid item xs={11}>
        {children}
      </Grid>
    </Grid>
  );
};
