import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Grid,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import { Spin, notification } from "antd";
import { postAttentions, getQuoteByUser } from "requests";
import moment from "moment-timezone";
import user from "utils/userDetails";

const ModalAttentions = (props) => {
  const { open, setOpen, setLoading, loading, reloadFunction, attention } =
    props;

  const [quote, setQuote] = useState("");
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    obtainData();
  }, []);

  const obtainData = async () => {
    setLoading(true);
    try {
      const res = await getQuoteByUser(attention.patient._id);
      if (res.length > 0) {
        setQuotes(res);
        setQuote(res[0]._id);
      }
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
      let items = {
        date: moment().format("YYYY-MM-DDTHH:mm:ss"),
        quote: quote,
        history: attention._id,
        company: user.idCompany,
      };
      await postAttentions(items);
      reloadFunction();
      setOpen(false);
      notification["success"]({
        message: `Éxito!`,
        description: `La atención se generó correctamente.`,
      });
    } catch (error) {
      notification["error"]({
        message: `Error!`,
        description: `Ocurrió un error al generar la atención.`,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} fullWidth maxWidth="md">
      <DialogTitle>
        <Typography variant="subtitle1" align="center" component="p">
          <b>GENERAR ATENCIÓN</b>
        </Typography>
      </DialogTitle>
      <Spin spinning={loading}>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={8} lg={9}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>
                  {quotes.length > 0
                    ? "CITAS"
                    : "El paciente no tiene citas pendientes."}
                </InputLabel>
                {quotes.length > 0 && (
                  <Select
                    label="CITAS"
                    value={quote}
                    onChange={(e) => setQuote(e.target.value)}
                  >
                    {quotes.map((el) => (
                      <MenuItem value={el._id} key={el._id}>
                        {el.urgency}
                        <FormHelperText
                          component="span"
                          style={{ marginLeft: 10 }}
                        >
                          {moment(el.start).format("ddd D MMM, hh:mm a")}
                        </FormHelperText>
                        <FormHelperText
                          component="span"
                          style={{ margin: "0 10px" }}
                        >
                          a
                        </FormHelperText>
                        <FormHelperText component="span">
                          {moment(el.end).format("hh:mm a")}
                        </FormHelperText>
                      </MenuItem>
                    ))}
                  </Select>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <TextField
                label="Fecha"
                fullWidth
                disabled
                value={moment().format("YYYY-MM-DD HH:mm")}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            size="large"
            variant="outlined"
            color="secondary"
            onClick={() => setOpen(false)}
          >
            CANCELAR
          </Button>
          {quotes.length > 0 && (
            <Button
              size="large"
              variant="contained"
              color="primary"
              onClick={sendRegister}
              type="submit"
            >
              GENERAR NUEVA ATENCIÓN
            </Button>
          )}
        </DialogActions>
      </Spin>
    </Dialog>
  );
};

export default ModalAttentions;
