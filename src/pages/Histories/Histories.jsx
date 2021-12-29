import React, { useEffect, useState, Fragment } from "react";
import {
  Button,
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Skeleton,
  FormHelperText,
  TextField,
  Fab,
  InputAdornment,
} from "@mui/material";
import Page from "components/Page";
import { notification, Spin } from "antd";
import { getHistories } from "requests";
import ModalHistories from "./components/ModalHistories";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import Attention from "./components/Attention";
import { Box } from "@mui/system";

const Equipment = () => {
  const [modalH, setModalH] = useState(false);
  const [loading, setLoading] = useState(false);
  const [paramSerach, setParamSerach] = useState("");
  const [viewAtt, setViewAtt] = useState({ data: null, open: false });
  const [data, setData] = useState([]);
  const [dataBase, setDataBase] = useState([]);

  useEffect(() => {
    obtainData();
  }, []);

  const obtainData = async () => {
    setLoading(true);
    try {
      const res = await getHistories();
      setData(res.reverse());
      setDataBase(res.reverse());
    } catch (error) {
      notification["error"]({
        message: `Oops!`,
        description: `Ocurrió un error al obtener la información.`,
      });
    } finally {
      setLoading(false);
    }
  };

  const resetSearch = () => {
    setParamSerach("");
    setData([...dataBase]);
  };

  const handleSearch = () => {
    if (paramSerach) {
      let txt = paramSerach.toLowerCase();
      let refactor = dataBase.filter((el) => {
        let {
          history_code,
          patient: { f_name, l_name, t_doc, n_doc },
        } = el;

        if (
          history_code.includes(txt) ||
          f_name.toLowerCase().includes(txt) ||
          l_name.toLowerCase().includes(txt) ||
          t_doc.toLowerCase().includes(txt) ||
          n_doc.toLowerCase().includes(txt)
        ) {
          return el;
        }
      });
      setData([...refactor]);
    } else {
      resetSearch();
    }
  };

  return (
    <Fragment>
      {viewAtt.open ? (
        <Attention data={viewAtt.data} setView={setViewAtt} />
      ) : (
        <Page
          helper="HISTORIAS CLÍNICAS"
          title="ATENCIONES"
          itemComponent={
            <Button
              variant="contained"
              size="large"
              onClick={() => setModalH(true)}
            >
              CREAR HISTORIA
            </Button>
          }
        >
          <Box pt={1} pb={3}>
            <FormHelperText>BUSCAR</FormHelperText>
            <TextField
              fullWidth
              label="-"
              placeholder="Ejm: Juan Rodriguez"
              InputLabelProps={{ shrink: true }}
              value={paramSerach}
              onChange={(e) => setParamSerach(e.target.value)}
              onKeyUp={(e) => e.key === "Enter" && handleSearch()}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Box mr={1}>
                      <Fab color="primary" size="small" onClick={handleSearch}>
                        <SearchIcon />
                      </Fab>
                    </Box>
                    <Fab color="secondary" size="small" onClick={resetSearch}>
                      <CloseIcon />
                    </Fab>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Spin spinning={loading}>
            {data.length > 0 ? (
              <Grid container spacing={2}>
                {data.map((el, index) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={index}>
                    <Card align="center" elevation={5}>
                      <CardContent>
                        <Typography variant="body2" gutterBottom>
                          <b>H.C. N° {el.history_code}</b>
                        </Typography>
                        <FormHelperText style={{ textAlign: "center" }}>
                          {el.patient.f_name.toUpperCase()}{" "}
                          {el.patient.l_name.toUpperCase()}
                        </FormHelperText>
                        <FormHelperText style={{ textAlign: "center" }}>
                          {el.patient.t_doc} {el.patient.n_doc}
                        </FormHelperText>
                      </CardContent>
                      <CardActions>
                        <Button
                          size="small"
                          variant="contained"
                          fullWidth
                          onClick={() => setViewAtt({ data: el, open: true })}
                        >
                          ATENCIONES
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Grid container spacing={2}>
                <Grid item xs={12} />
                {loading ? (
                  [1, 2, 3, 4, 5, 6, 7, 8].map((el, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={index}>
                      <Skeleton
                        width="100%"
                        height={100}
                        variant="rectangular"
                      />
                    </Grid>
                  ))
                ) : (
                  <Grid item xs={12}>
                    <Typography align="center" variant="body2">
                      AQUÍ SE MOSTRARÁN LAS HISTORIAS CLÍNICAS
                    </Typography>
                  </Grid>
                )}
              </Grid>
            )}
          </Spin>
          {modalH && (
            <ModalHistories
              open={modalH}
              setOpen={setModalH}
              setLoading={setLoading}
              loading={loading}
              reloadFunction={obtainData}
              correlative={(data.length + 1).toString()}
            />
          )}
        </Page>
      )}
    </Fragment>
  );
};

export default Equipment;
