import React, { useEffect, useState } from "react";
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
import { getPatients, postHistories } from "requests";
import SelectUsers from "../../../components/selects/SelectUsers";
import user from "utils/userDetails";

const ModalCompany = ({
  open,
  setOpen,
  setLoading,
  loading,
  reloadFunction,
  correlative,
}) => {
  const formatCRTV = correlative.padStart(12, "0");
  const [patient, setPatient] = useState(null);
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    obtainData();
  }, []);

  const obtainData = async () => {
    setLoading(true);
    try {
      const res = await getPatients();
      setPatients(res);
    } catch (error) {
      notification["error"]({
        message: `Oops!`,
        description: `Ocurrió un error al obtener la información.`,
      });
    } finally {
      setLoading(false);
    }
  };

  const sendRegister = async () => {
    setLoading(true);
    try {
      if (!formatCRTV || !patient || !user.idCompany) {
        notification["warning"]({ message: "Campos requeridos..." });
        return;
      }
      let items = {
        history_code: formatCRTV,
        patient,
        company: user.idCompany,
      };

      await postHistories(items);
      reloadFunction();
      setOpen(false);
      notification["success"]({
        message: `Éxito!`,
        description: `La historia se generó correctamente.`,
      });
    } catch (error) {
      notification["warning"]({
        message: `El paciente ya tiene una historia clínica generada.`,
        description: "Solo debe agregar atenciones.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} fullWidth maxWidth="md">
      <DialogTitle>
        <Typography variant="h5" align="center" component="p">
          <b>GENERAR HISTORIA CLÍNICA</b>
        </Typography>
      </DialogTitle>
      <Spin spinning={loading}>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} container alignItems="flex-end">
              <TextField
                label="Código de la historia"
                fullWidth
                size="small"
                disabled
                defaultValue={formatCRTV}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <SelectUsers
                data={patients}
                value={patient}
                onChange={setPatient}
                title="Pacientes"
              />
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
          <Button variant="contained" color="primary" onClick={sendRegister}>
            GUARDAR
          </Button>
        </DialogActions>
      </Spin>
    </Dialog>
  );
};

export default ModalCompany;
