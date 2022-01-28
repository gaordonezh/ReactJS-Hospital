import React, { Fragment, useRef } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
  Button,
  FormHelperText,
  Grid,
  FormGroup,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Radio,
  List,
  Paper,
  Box,
  Container,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Card,
  CardContent,
} from "@mui/material";
import moment from "moment-timezone";
import Print from "react-to-print";
import PrintIcon from "@mui/icons-material/Print";

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

const pageStyle = `
  @page {
    size: auto;
    margin: 5mm;
  }

  @media print {
    body {
      -webkit-print-color-adjust: exact;
      padding: 29px !important;
    }
    .pagebreak {
      page-break-before: always;
    }
  }
`;

const ModalDetails = ({ open, setOpen, data, equipment }) => {
  const printPage = useRef(null);
  let ttRecursos = 0;
  let ttRRHH = 0;

  return (
    <Dialog open={open} onClose={() => setOpen({ open: false })} fullScreen>
      <DialogContent align="center">
        <Print
          trigger={() => (
            <Button variant="contained" color="primary" size="large">
              <PrintIcon />
              IMPRIMIR
            </Button>
          )}
          content={() => printPage.current}
          documentTitle="TÍTULO DEL DOCUMENTO"
          removeAfterPrint={true}
          pageStyle={pageStyle}
        />
        <Container maxWidth="md">
          <Paper variant="outlined">
            <Box p={5}>
              <div ref={printPage}>
                <Title title="1. DATOS DEL USUARIO (Ubicación física del equipo)" />
                <Grid item xs={12}>
                  <Box pl={3}>
                    <Grid container>
                      <Grid item xs={12} md={4}>
                        <Text title="Edificio" value="LUGAR" />
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Text title="Nivel" value="LUGAR" />
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Text title="UPSS" value="LUGAR" />
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>

                <Title title="2. DATOS DEL BIEN" />
                <Grid item xs={12}>
                  <Box pl={3}>
                    <Grid container>
                      <Grid item xs={12} md={6}>
                        <Text
                          title="Nombre del equipo"
                          value={equipment.name}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Text title="Tipo" value={equipment.type} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Text
                          title="Etiqueta patrimonial"
                          value={equipment.etiqueta}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Text title="Marca" value={equipment.marca} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Text title="Modelo" value={equipment.modelo} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Text title="Serie" value={equipment.serie} />
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>

                <Grid container justifyContent="flex-end">
                  {data.programmed ? (
                    <Fragment>
                      <Title title="3. DATOS DE LA SOLICITUD" />
                      <Grid item xs={12}>
                        <Box pl={3}>
                          <Grid container>
                            <Grid item xs={12} sm={12} md={4} lg={6}>
                              <Text
                                title="Descripción del problema"
                                value={data.description}
                              />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={3}>
                              <Text
                                title="Fecha de petición"
                                value={moment(data.date_request).format(
                                  "DD/MM/YYYY"
                                )}
                              />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={3}>
                              <Text
                                title="Fecha de conformidad"
                                value={moment(data.date_conformidad).format(
                                  "DD/MM/YYYY"
                                )}
                              />
                            </Grid>
                          </Grid>
                        </Box>
                      </Grid>
                    </Fragment>
                  ) : null}
                  <Title title="4. DATOS DE DIAGNOSTICO Y PROGRAMACIÓN" />
                  <Grid item xs={12}>
                    <Box pl={3}>
                      <Grid container>
                        <Grid item xs={12}>
                          <Text
                            title="Diagnostico de falla"
                            value={data.diagnostico}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={7} lg={8}>
                          <Text
                            title="Ejecutor del mantenimiento"
                            value={data.ejecutor_mantenimiento}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={5} lg={4}>
                          <Text
                            title="Fecha programada"
                            value={moment(data.date_programmed).format(
                              "DD/MM/YYYY"
                            )}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <CheckBoxList
                            title="Estado inicial"
                            value={data.status_start}
                            row={true}
                            list={statusList}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Box pt={1} mb={2}>
                            <Typography variant="subtitle2" color="textPrimary">
                              Tipo de falla
                            </Typography>
                            <FormGroup row>
                              {data.tipo_falla.map((el, index) => (
                                <FormControlLabel
                                  style={{ paddingRight: 5, margin: 0 }}
                                  key={index}
                                  control={
                                    <Checkbox
                                      checked={el.check}
                                      name={el.label}
                                      style={{ padding: 0, marginRight: 2 }}
                                    />
                                  }
                                  label={
                                    <FormHelperText>{el.label}</FormHelperText>
                                  }
                                />
                              ))}
                            </FormGroup>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>

                  <Title title="5. DATOS GENERALES DE LA ORDEN DEL TRABAJO DE MANTENIMIENTO" />
                  <Grid item xs={12}>
                    <Box pl={3}>
                      <Grid container>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                          <CheckBoxList
                            title="Mantenimiento"
                            value={data.tipo_mantenimiento}
                            row={false}
                            list={listTM}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                          <CheckBoxList
                            title="Tipo de OTM"
                            value={data.tipo_otm}
                            row={false}
                            list={listOTM}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                          <CheckBoxList
                            title="Prioridad"
                            value={data.prioridad}
                            row={false}
                            list={listPrioridad}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                          <CheckBoxList
                            title="Tipo de atención"
                            value={data.tipo_atencion}
                            row={false}
                            list={listTipoAtencion}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                          <CheckBoxList
                            title="Tipo de equipamiento"
                            value={data.tipo_equipamiento}
                            row={false}
                            list={listTipoEquipamiento}
                          />
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>

                  <Title title="6. DATOS GENERALES DE LA EJECUCIÓN" />
                  <Grid item xs={12}>
                    <Box pl={3}>
                      <Grid container>
                        <Grid item xs={12}>
                          <List>
                            {data.actividades_list.map((el, index) => (
                              <Text
                                title={`Actividad ${index + 1}`}
                                value={el}
                                key={index}
                              />
                            ))}
                          </List>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <FormControlLabel
                            control={<Checkbox checked={data.garantia} />}
                            label="Garantía en meses"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <FormControlLabel
                            control={<Checkbox checked={data.interrupcion} />}
                            label="Interrupción al servicio"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Text
                            title="Fecha de inicio"
                            value={moment(data.datetime_start).format(
                              "DD/MM/YYYY, hh:mm a"
                            )}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Text
                            title="Fecha de finalización"
                            value={moment(data.datetime_end).format(
                              "DD/MM/YYYY, hh:mm a"
                            )}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <CheckBoxList
                            title="Estado de finalización"
                            value={data.status_end}
                            row={true}
                            list={statusList}
                          />
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>

                  <Title title="7. DATOS DE LOS REPUESTOS (Partes, accesorios y materiales)" />
                  <Grid item xs={12}>
                    <Box pl={3} sx={{ mt: 1 }}>
                      <TableContainer>
                        <Table size="small">
                          <TableHead>
                            <TableRow>
                              <TableCell align="center" style={{ padding: 3 }}>
                                N°
                              </TableCell>
                              <TableCell align="center" style={{ padding: 3 }}>
                                Código
                              </TableCell>
                              <TableCell align="center" style={{ padding: 3 }}>
                                Tipo
                              </TableCell>
                              <TableCell align="center" style={{ padding: 3 }}>
                                Nombre y Características
                              </TableCell>
                              <TableCell align="center" style={{ padding: 3 }}>
                                Unidad medída
                              </TableCell>
                              <TableCell align="center" style={{ padding: 3 }}>
                                Cantidad
                              </TableCell>
                              <TableCell align="center" style={{ padding: 3 }}>
                                Valor unitario
                              </TableCell>
                              <TableCell align="center" style={{ padding: 3 }}>
                                Total
                              </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {data.recursos.map((row, i) => {
                              ttRecursos += Number(row.total);
                              return (
                                <TableRow key={i}>
                                  <TableCell
                                    align="center"
                                    style={{ padding: 3 }}
                                  >
                                    {i + 1}
                                  </TableCell>
                                  <TableCell
                                    align="center"
                                    style={{ padding: 3 }}
                                  >
                                    {row.code}
                                  </TableCell>
                                  <TableCell
                                    align="center"
                                    style={{ padding: 3 }}
                                  >
                                    {row.type}
                                  </TableCell>
                                  <TableCell
                                    align="center"
                                    style={{ padding: 3 }}
                                  >
                                    {row.name}{" "}
                                    <FormHelperText>
                                      {row.caract}
                                    </FormHelperText>
                                  </TableCell>
                                  <TableCell
                                    align="center"
                                    style={{ padding: 3 }}
                                  >
                                    {row.und_m}
                                  </TableCell>
                                  <TableCell
                                    align="center"
                                    style={{ padding: 3 }}
                                  >
                                    {row.cant}
                                  </TableCell>
                                  <TableCell
                                    align="center"
                                    style={{ padding: 3 }}
                                  >
                                    {row.vlr_u}
                                  </TableCell>
                                  <TableCell
                                    align="center"
                                    style={{ padding: 3 }}
                                  >
                                    {row.total}
                                  </TableCell>
                                </TableRow>
                              );
                            })}
                            <TableRow>
                              <TableCell align="right" colSpan={7}>
                                <b>TOTAL</b>
                              </TableCell>
                              <TableCell align="center" style={{ padding: 3 }}>
                                {ttRecursos}
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Box>
                  </Grid>

                  <Title title="8. DATOS DE LA MANO DE OBRA" />
                  <Grid item xs={12}>
                    <Box pl={3} sx={{ mt: 1 }}>
                      <TableContainer>
                        <Table size="small">
                          <TableHead>
                            <TableRow>
                              <TableCell align="center" style={{ padding: 3 }}>
                                N°
                              </TableCell>
                              <TableCell align="center" style={{ padding: 3 }}>
                                Código
                              </TableCell>
                              <TableCell align="center" style={{ padding: 3 }}>
                                Nombre Completo
                              </TableCell>
                              <TableCell align="center" style={{ padding: 3 }}>
                                Precio/Hora
                              </TableCell>
                              <TableCell align="center" style={{ padding: 3 }}>
                                Horas
                              </TableCell>
                              <TableCell align="center" style={{ padding: 3 }}>
                                Total
                              </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {data.rrhh.map((row, i) => {
                              ttRRHH += Number(row.total);
                              return (
                                <TableRow key={i}>
                                  <TableCell
                                    align="center"
                                    style={{ padding: 3 }}
                                  >
                                    {i + 1}
                                  </TableCell>
                                  <TableCell
                                    align="center"
                                    style={{ padding: 3 }}
                                  >
                                    {row.code}
                                  </TableCell>
                                  <TableCell
                                    align="center"
                                    style={{ padding: 3 }}
                                  >
                                    {row.name}
                                  </TableCell>
                                  <TableCell
                                    align="center"
                                    style={{ padding: 3 }}
                                  >
                                    {row.price_hour}
                                  </TableCell>
                                  <TableCell
                                    align="center"
                                    style={{ padding: 3 }}
                                  >
                                    {row.hours}
                                  </TableCell>
                                  <TableCell
                                    align="center"
                                    style={{ padding: 3 }}
                                  >
                                    {row.total}
                                  </TableCell>
                                </TableRow>
                              );
                            })}
                            <TableRow>
                              <TableCell align="right" colSpan={5}>
                                <b>TOTAL</b>
                              </TableCell>
                              <TableCell align="center" style={{ padding: 3 }}>
                                {ttRRHH}
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Box>
                  </Grid>

                  <Title title="9. DATOS DE COSTOS TOTALES (S/.)" />
                  <Grid item xs={12}>
                    <Box pl={3} sx={{ mt: 1 }}>
                      <TableContainer>
                        <Table size="small">
                          <TableHead>
                            <TableRow>
                              <TableCell align="center">
                                COSTO DE REPUESTOS
                              </TableCell>
                              <TableCell align="center">
                                COSTO DE MANO DE OBRA
                              </TableCell>
                              <TableCell align="center">
                                COSTOS ADICIONALES
                              </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            <TableRow>
                              <TableCell align="center">
                                S/ {ttRecursos}
                              </TableCell>
                              <TableCell align="center">S/ {ttRRHH}</TableCell>
                              <TableCell align="center">
                                S/ {data.aditional}
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell align="right" colSpan={2}>
                                <b>COSTO TOTAL</b>
                              </TableCell>
                              <TableCell align="center">
                                {`S/ ${
                                  ttRecursos + ttRRHH + Number(data.aditional)
                                }`}
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Box>
                  </Grid>
                </Grid>
              </div>
            </Box>
          </Paper>
        </Container>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setOpen({ open: false })}
        >
          SALIR
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalDetails;

const Title = ({ title, helper }) => {
  return (
    <Grid item xs={12} style={{ borderBottom: "1px solid #ccc" }}>
      <Typography variant="subtitle1">
        <b> {title} </b> {helper}
      </Typography>
    </Grid>
  );
};

const Text = ({ title, value }) => {
  return (
    <Grid container style={{ borderBottom: "1px solid #eee" }}>
      <Box mr={1}>
        <Typography variant="subtitle2" color="textPrimary">
          {title}
        </Typography>
      </Box>
      <Typography variant="body2" color="textSecondary">
        {value}
      </Typography>
    </Grid>
  );
};

const CheckBoxList = ({ title, value, row, list }) => {
  return (
    <Box pt={1}>
      <Typography variant="subtitle2" color="textPrimary">
        {title}
      </Typography>
      <RadioGroup row={row} value={value}>
        {list.map((el, index) => (
          <FormControlLabel
            style={{ paddingRight: 5, margin: 0 }}
            key={index}
            value={el}
            control={<Radio style={{ padding: 0, marginRight: 2 }} />}
            label={<FormHelperText>{el}</FormHelperText>}
          />
        ))}
      </RadioGroup>
    </Box>
  );
};
