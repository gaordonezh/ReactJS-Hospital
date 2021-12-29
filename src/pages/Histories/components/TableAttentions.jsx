import React, { Fragment } from "react";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { ButtonGroup, Button, Grid } from "@mui/material";
import moment from "moment-timezone";
import { getRecipes } from "requests";
import { Spin, notification } from "antd";

const TableAttentions = ({
  data,
  loading,
  setLoading,
  setDetails,
  setRecipe,
}) => {
  const [open, setOpen] = React.useState(null);

  return (
    <Spin spinning={loading} component="div">
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell align="center">Fecha</TableCell>
              <TableCell align="center">Motivo</TableCell>
              <TableCell align="center">Inicio estimado</TableCell>
              <TableCell align="center">Fin estimado</TableCell>
              <TableCell align="center">Acciones</TableCell>
            </TableRow>
          </TableHead>
          {data.length > 0 ? (
            <TableBody>
              {data.map((row, index) => (
                <Fragment key={index}>
                  <TableRow>
                    <TableCell>
                      <IconButton
                        onClick={() => {
                          if (index === open) setOpen(null);
                          else setOpen(index);
                        }}
                      >
                        {open === index ? (
                          <KeyboardArrowUpIcon />
                        ) : (
                          <KeyboardArrowDownIcon />
                        )}
                      </IconButton>
                    </TableCell>
                    <TableCell align="center">
                      {moment(row.date).format("DD/MM/YYYY")}
                    </TableCell>
                    <TableCell align="center">{row.quote.urgency}</TableCell>
                    <TableCell align="center">
                      {moment(row.quote.start).format("hh:mm a")}
                    </TableCell>
                    <TableCell align="center">
                      {moment(row.quote.end).format("hh:mm a")}
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        onClick={() => setDetails({ open: true, data: row })}
                        variant="contained"
                      >
                        DETALLES
                      </Button>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell
                      style={{ paddingBottom: 0, paddingTop: 0 }}
                      colSpan={6}
                    >
                      <Collapse
                        in={open === index}
                        timeout="auto"
                        unmountOnExit
                      >
                        <Row
                          setRecipe={setRecipe}
                          row={row}
                          setLoading={setLoading}
                        />
                      </Collapse>
                    </TableCell>
                  </TableRow>
                </Fragment>
              ))}
            </TableBody>
          ) : (
            <Typography variant="caption" align="center">
              AQUÍ SE MOSTRARÁN LAS ATENCIONES
            </Typography>
          )}
        </Table>
      </TableContainer>
    </Spin>
  );
};

export default TableAttentions;

function Row(props) {
  const { row, setRecipe, setLoading } = props;
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    obtainData();
  }, [row]);

  const obtainData = async () => {
    try {
      setLoading(true);
      const res = await getRecipes(row._id);
      setData(res);
    } catch (error) {
      notification["error"]({
        description: `Ocurrió un error al obtener la información.`,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <Grid container justifyContent="space-between" alignItems="center">
        <Typography variant="h6" gutterBottom component="div">
          Receta médica
        </Typography>
        <Button
          onClick={() => setRecipe({ open: true, data: row })}
          color="secondary"
          variant="contained"
          size="small"
        >
          AGREGAR
        </Button>
      </Grid>
      <Table size="small" aria-label="purchases">
        <TableHead>
          <TableRow>
            <TableCell align="center">Emisión</TableCell>
            <TableCell align="center">Expiración</TableCell>
            <TableCell align="center">Indicaciones</TableCell>
            <TableCell align="center">Receta</TableCell>
            <TableCell align="center">Acciones</TableCell>
          </TableRow>
        </TableHead>
        {data.length > 0 ? (
          <TableBody>
            {data.map((el, index) => (
              <TableRow key={index}>
                <TableCell align="center">{el.emision_date}</TableCell>
                <TableCell align="center">{el.expiration_date}</TableCell>
                <TableCell align="center">{el.indicaciones}</TableCell>
                <TableCell align="center">{el.receta}</TableCell>
                <TableCell align="center">
                  <Button size="small" variant="contained">
                    Editar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        ) : (
          <Typography variant="caption" align="center">
            AQUÍ SE MOSTRARÁN LAS RECETAS
          </Typography>
        )}
      </Table>
    </Fragment>
  );
}
