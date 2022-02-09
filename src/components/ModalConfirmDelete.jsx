import React, { useState } from "react";
import { notification } from "antd";
import axios from "axios";
import api from "config/api.config";
import user from "utils/userDetails";
import {
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

const ModalConfirmDelete = (props) => {
  const { open, setOpen, handleRefresh, endpoint } = props;
  const [loading, setLoading] = useState(false);

  const deleteRegister = async () => {
    setLoading(true);
    try {
      await axios.delete(`${api}/${endpoint}`, {
        headers: { Authorization: user.token },
      });
      notification["success"]({
        message: "Urra!",
        description: "El registro se eliminó correctamente.",
      });
      handleRefresh();
      setOpen({ open: false });
    } catch (error) {
      notification["error"]({ message: "Ocurrió un error al tratar de eliminar el registro." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onClose={() => setOpen({ open: false })} fullWidth>
      <DialogTitle>
        <Typography variant="h4" align="center">
          ¿Está seguro que desea eliminar este registro?
        </Typography>
      </DialogTitle>
      <DialogContent align="center">
        <Typography variant="caption" color="text.secondary">
          Tener en consideración que el registro ya no estará disponible para su utilización e
          interacción con el sistema.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button disabled={loading} onClick={() => setOpen({ open: false })} variant="outlined">
          CANCELAR
        </Button>
        <Button disabled={loading} onClick={deleteRegister} color="error" variant="contained">
          CONFIRMAR
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalConfirmDelete;
