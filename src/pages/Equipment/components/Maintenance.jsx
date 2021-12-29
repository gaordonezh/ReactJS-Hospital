import React, { Fragment, useEffect, useState } from "react";
import {
  Button,
  Grid,
  Fab,
  Tooltip,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import Page from "components/Page";
import { getMaintenances } from "requests";
import { Empty, notification, Spin } from "antd";
import ModalDetails from "./ModalDetails";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SettingsIcon from "@mui/icons-material/Settings";
import ModalMaintenance from "./ModalMaintenance";
import moment from "moment-timezone";

const Equipment = ({ equipment, setMaintenance, reloadFunction }) => {
  const [modalDetails, setModalDetails] = useState({ open: false, data: null });
  const [modal, setModal] = useState({ data: null, open: false });
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (equipment) {
      obtainData(equipment._id);
    }
  }, [equipment]);

  const obtainData = async (code) => {
    setLoading(true);
    try {
      const res = await getMaintenances(code);
      setData(res.reverse());
    } catch (error) {
      notification["error"]({
        message: `Oops!`,
        description: `Ocurrió un error al obtener la información.`,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Page
      helper="EQUIPOS"
      title={`MANTENIMIENTO DE ${equipment.name}`}
      itemComponent={
        <Fragment>
          <Button
            variant="outlined"
            size="large"
            onClick={() => setMaintenance({ open: false, data: null })}
          >
            VOLVER
          </Button>{" "}
          <Button
            variant="contained"
            size="large"
            onClick={() => setModal({ open: true, data: null })}
          >
            REGISTRAR
          </Button>
        </Fragment>
      }
    >
      <br />
      <Spin spinning={loading}>
        <Grid container spacing={2}>
          {data.length > 0 ? (
            <Grid item xs={12}>
              <TableContainer>
                <Table className="table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">¿Programado?</TableCell>
                      <TableCell align="center">Diagnostico</TableCell>
                      <TableCell align="center">Fecha Programada</TableCell>
                      <TableCell align="center">Estado Inicial</TableCell>
                      <TableCell align="center">Estado Final</TableCell>
                      <TableCell align="center">Acciones</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.map((el, index) => (
                      <TableRow key={index}>
                        <TableCell align="center">
                          {el.programmed ? "SI" : "NO"}
                        </TableCell>
                        <TableCell align="center">{el.diagnostico}</TableCell>
                        <TableCell align="center">
                          {moment(el.date_programmed).format("DD/MM/YYYY")}
                        </TableCell>
                        <TableCell align="center">{el.status_start}</TableCell>
                        <TableCell align="center">{el.status_end}</TableCell>
                        <TableCell align="center">
                          <Tooltip
                            placement="top-end"
                            title="Modificar información del mantenimiento"
                          >
                            <Fab
                              size="small"
                              color="secondary"
                              onClick={() => setModal({ open: true, data: el })}
                            >
                              <SettingsIcon />
                            </Fab>
                          </Tooltip>
                          <Tooltip placement="top-end" title="Resumen">
                            <Fab
                              size="small"
                              color="primary"
                              onClick={() =>
                                setModalDetails({ open: true, data: el })
                              }
                            >
                              <MoreHorizIcon />
                            </Fab>
                          </Tooltip>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          ) : (
            <Grid item xs={12} align="center">
              <Empty
                description={`AQUÍ SE MOSTRARÁN LOS MANTENIMIENTO DE ${equipment.name}`}
              />
            </Grid>
          )}
        </Grid>
      </Spin>
      {modal.open && (
        <ModalMaintenance
          open={modal.open}
          setOpen={setModal}
          data={modal.data}
          equipment={equipment}
          refreshFunction={obtainData}
          reloadFunction={reloadFunction}
          setMaintenance={setMaintenance}
        />
      )}
      {modalDetails.open && (
        <ModalDetails
          open={modalDetails.open}
          setOpen={setModalDetails}
          data={modalDetails.data}
          equipment={equipment}
        />
      )}
    </Page>
  );
};

export default Equipment;
