import React, { Fragment } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Typography,
  Divider,
  Card,
} from "@mui/material";
import moment from "moment-timezone";

const ModalDetails = ({ open, setOpen, data, setModalQuote }) => {
  const changeToEdit = () => {
    setModalQuote({ open: true, data: data });
    setOpen({ open: false });
  };

  return (
    <Fragment>
      <Dialog
        open={open}
        fullWidth
        maxWidth="sm"
        onClose={() => setOpen(false)}
      >
        <Card style={{ border: `3px solid ${data.color}` }}>
          <DialogTitle style={{ backgroundColor: data.color }}>
            <Typography
              variant="subtitle1"
              component="p"
              align="center"
              color="white"
            >
              <b>{data.status}</b>
            </Typography>
          </DialogTitle>
          <DialogContent align="center">
            <Typography color="text.secondary" gutterBottom>
              <b>Inicio</b> • {moment(data.start).format("ddd D MMM, HH:mm")}
            </Typography>
            <Typography color="text.secondary" gutterBottom>
              <b>Finalización estimada</b> •{" "}
              {moment(data.end).format("ddd D MMM, HH:mm")}
            </Typography>
            {data.urgency && (
              <Typography color="text.secondary" gutterBottom>
                <b>Urgencia</b> • {data.urgency}
              </Typography>
            )}
            <Divider />
            <Typography color="text.secondary">
              <b>Paciente</b> • {data.patient.f_name} {data.patient.l_name}
            </Typography>
            <Typography color="text.secondary">
              <b>Médico</b> • {data.user.f_name} {data.user.l_name}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => setOpen(false)}
            >
              SALIR
            </Button>
            {data.status === "PENDIENTE" && (
              <Button variant="contained" onClick={changeToEdit}>
                EDITAR
              </Button>
            )}
          </DialogActions>
        </Card>
      </Dialog>
    </Fragment>
  );
};

export default ModalDetails;
