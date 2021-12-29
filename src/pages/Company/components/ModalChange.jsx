import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  Button,
  Grid,
  Typography,
  FormHelperText,
} from "@mui/material";
import StorageService from "auth/StorageService";
import SESSION_NAME from "config/session";

const ModalChange = (props) => {
  const { open, setOpen, data } = props;

  const handleChange = () => {
    try {
      let res = StorageService.get(SESSION_NAME);
      res.data["company"] = data;
      StorageService.set(SESSION_NAME, res);
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  return (
    <Dialog open={open} fullWidth maxWidth="xs">
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography align="center" variant="h5">
              <b>CAMBIAR DE EMPRESA</b>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <FormHelperText>
              ¿SEGURO QUE DESEA CAMBIAR DE EMPRESA?
            </FormHelperText>
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
        <Button variant="contained" color="primary" onClick={handleChange}>
          CONFIRMAR
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalChange;
