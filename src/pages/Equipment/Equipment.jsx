import React, { useEffect, useState } from "react";
import {
  Button,
  Box,
  Stack,
  InputAdornment,
  TextField,
  Fab,
  Typography,
  FormHelperText,
} from "@mui/material";
import Page from "components/Page";
import { getEquipments, uploadEquipments } from "requests";
import ModalEquipments from "./components/ModalEquipments";
import { notification } from "antd";
import TableEquipments from "./components/TableEquipments";
import { AttachFile, Upload } from "@mui/icons-material";

const Equipment = () => {
  const [modal, setModal] = useState({ data: null, open: false });
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [file, setFile] = useState(null);

  useEffect(() => {
    obtainData();
  }, []);

  const obtainData = async () => {
    setLoading(true);
    try {
      const res = await getEquipments();
      setData([...res.reverse()]);
    } catch (error) {
      notification["error"]({
        message: `Oops!`,
        description: `Ocurrió un error al obtener la información.`,
      });
    } finally {
      setLoading(false);
    }
  };

  const uploadExcel = async () => {
    setLoading(true);
    try {
      let form = new FormData();
      form.append("file", file);

      const res = await uploadEquipments(form);

      if (res.status) {
        notification["success"]({ message: res.message });
        obtainData();
        setFile(null);
      }
    } catch (error) {
      notification["error"]({
        message: `Ocurrió un error al realizar la operación.`,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Page
      helper="EQUIPOS"
      title={
        <Typography variant="inherit">
          EQUIPOS{" "}
          <FormHelperText
            component="a"
            href="https://res.cloudinary.com/backet-repartos/raw/upload/v1643167672/IMPORTAR_EQUIPOS_lsc6f5.xlsx"
            target="_blank"
            sx={{ color: "#6bc8ff" }}
          >
            <AttachFile /> PLANTILLA DE IMPORTACIÓN
          </FormHelperText>
        </Typography>
      }
      itemComponent={
        <Stack direction="row" spacing={1}>
          <TextField
            label="IMPORTACIÓN (archivo excel)"
            type="file"
            InputLabelProps={{ shrink: true }}
            onChange={(e) => setFile(e.target.files[0])}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Fab onClick={uploadExcel} color="primary" disabled={!file}>
                    <Upload />
                  </Fab>
                </InputAdornment>
              ),
            }}
          />

          <Button
            variant="contained"
            size="large"
            onClick={() => setModal({ open: true, data: null })}
          >
            AGREGAR EQUIPO
          </Button>
        </Stack>
      }
    >
      <Box p={1}>
        <TableEquipments data={data} loading={loading} setModal={setModal} />
      </Box>
      {modal.open && (
        <ModalEquipments
          open={modal.open}
          setOpen={setModal}
          data={modal.data}
          setLoading={setLoading}
          loading={loading}
          reloadFunction={obtainData}
        />
      )}
    </Page>
  );
};

export default Equipment;
