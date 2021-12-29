import React, { Fragment, useState } from "react";
import { postDays, putDays } from "requests";
import {
  Grid,
  Typography,
  DialogContent,
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Switch from "@mui/material/Switch";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import SelectSchedule from "../../components/selects/SelectSchedule";
import SelectUsers from "../../components/selects/SelectUsers";
import userDetails from "utils/userDetails";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import EditIcon from "@mui/icons-material/Edit";
import { notification, Spin } from "antd";

const UserSchedules = ({
  horarios,
  users,
  setLoading,
  refresh,
  loading,
  schedules,
}) => {
  const [modalSchedule, setModalSchedule] = useState({
    open: false,
    data: null,
  });

  return (
    <Fragment>
      <TableContainer>
        <Table className="table" size="small">
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <Button
                  variant="contained"
                  style={{ border: "1px solid #fff" }}
                  onClick={() => setModalSchedule({ open: true })}
                >
                  AGREGAR
                </Button>
              </TableCell>
              {[
                "HORARIO",
                "LUNES",
                "MARTES",
                "MIÉRCOLES",
                "JUEVES",
                "VIERNES",
                "SÁBADO",
                "DOMINGO",
                "EDITAR",
              ].map((el, index) => (
                <TableCell key={index} align="center">
                  {el}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          {schedules.length > 0 ? (
            <TableBody>
              {schedules.map((el, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {el.user.f_name} {el.user.l_name}
                  </TableCell>
                  <TableCell align="center">
                    {el.schedule.start}
                    {"  "}
                    {el.schedule.end}
                  </TableCell>
                  <TableCell align="center">
                    <Option check={el.monday} />
                  </TableCell>
                  <TableCell align="center">
                    <Option check={el.tuesday} />
                  </TableCell>
                  <TableCell align="center">
                    <Option check={el.wednesday} />
                  </TableCell>
                  <TableCell align="center">
                    <Option check={el.thursday} />
                  </TableCell>
                  <TableCell align="center">
                    <Option check={el.friday} />
                  </TableCell>
                  <TableCell align="center">
                    <Option check={el.saturday} />
                  </TableCell>
                  <TableCell align="center">
                    <Option check={el.sunday} />
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      size="small"
                      onClick={() => setModalSchedule({ data: el, open: true })}
                    >
                      <EditIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          ) : (
            <caption>
              <div align="center">
                AQUÍ SE MOSTRARÁ LA PROGRAMACIÓN DE HORARIOS
              </div>
            </caption>
          )}
        </Table>
      </TableContainer>
      {modalSchedule.open && (
        <ModalSchedules
          open={modalSchedule.open}
          setOpen={setModalSchedule}
          horarios={horarios}
          users={users}
          setLoading={setLoading}
          refresh={refresh}
          loading={loading}
          data={modalSchedule.data}
        />
      )}
    </Fragment>
  );
};

export default UserSchedules;

const Option = ({ check }) => {
  return check ? (
    <RadioButtonCheckedIcon color="success" />
  ) : (
    <RadioButtonUncheckedIcon color="action" />
  );
};

const ModalSchedules = ({
  open,
  setOpen,
  horarios,
  users,
  setLoading,
  refresh,
  loading,
  data,
}) => {
  const [week, setWeek] = useState([
    {
      label: "LUNES",
      key: "monday",
      selected: Boolean(data) ? data.monday : false,
    },
    {
      label: "MARTES",
      key: "tuesday",
      selected: Boolean(data) ? data.tuesday : false,
    },
    {
      label: "MIÉRCOLES",
      key: "wednesday",
      selected: Boolean(data) ? data.wednesday : false,
    },
    {
      label: "JUEVES",
      key: "thursday",
      selected: Boolean(data) ? data.thursday : false,
    },
    {
      label: "VIERNES",
      key: "friday",
      selected: Boolean(data) ? data.friday : false,
    },
    {
      label: "SÁBADO",
      key: "saturday",
      selected: Boolean(data) ? data.saturday : false,
    },
    {
      label: "DOMINGO",
      key: "sunday",
      selected: Boolean(data) ? data.sunday : false,
    },
  ]);
  const [schedule, setSchedule] = useState(
    Boolean(data) ? data.schedule._id : null
  );
  const [user, setUser] = useState(Boolean(data) ? data.user._id : null);

  const handleChange = (index) => {
    week[index].selected = !week[index].selected;
    setWeek([...week]);
  };

  const saveDays = async () => {
    try {
      if (user && schedule) {
        setLoading(true);
        let formData = {
          schedule,
          monday: week[0].selected,
          tuesday: week[1].selected,
          wednesday: week[2].selected,
          thursday: week[3].selected,
          friday: week[4].selected,
          saturday: week[5].selected,
          sunday: week[6].selected,
        };

        if (!Boolean(data)) {
          formData["user"] = user;
          formData["company"] = userDetails.idCompany;
        }

        if (data) await putDays(formData, data._id);
        else await postDays(formData);
        notification["success"]({
          message: `La programación de días se ${
            Boolean(data) ? "actualizó" : "realizó"
          } con éxito.`,
        });
        refresh(false, false, true);
        setOpen({ open: false });
      } else {
        notification["warning"]({
          message: "Debe seleccionar los campos requeridos",
        });
      }
    } catch (error) {
      notification["error"]({
        message: `Oops!`,
        description: `Ocurrió un error al guardar la información.`,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onClose={() => setOpen({ open: false })} fullWidth>
      <DialogTitle>
        <Typography align="center">
          <b>AGREGAR</b>
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Spin spinning={loading}>
          <Grid container spacing={1} justifyContent="center">
            <Grid item xs={12}>
              <SelectSchedule
                data={horarios}
                value={schedule}
                onChange={(e) => setSchedule(e)}
              />
            </Grid>
            {!Boolean(data) && (
              <Grid item xs={12}>
                <SelectUsers
                  data={users}
                  value={user}
                  onChange={(e) => setUser(e)}
                />
              </Grid>
            )}
            <Grid item xs={12}>
              <FormHelperText>DÍAS</FormHelperText>
              {week.map((el, index) => (
                <FormControlLabel
                  key={el.key}
                  control={
                    <Switch
                      checked={el.selected}
                      onChange={() => handleChange(index)}
                      name={el.key}
                    />
                  }
                  label={el.label}
                />
              ))}
            </Grid>
          </Grid>
        </Spin>
      </DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => setOpen({ open: false })}
        >
          CANCELAR
        </Button>
        <Button variant="contained" onClick={saveDays}>
          GUARDAR
        </Button>
      </DialogActions>
    </Dialog>
  );
};
