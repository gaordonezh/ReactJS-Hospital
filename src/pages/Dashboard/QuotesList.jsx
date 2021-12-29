import React from "react";
import {
  Typography,
  Card,
  CardContent,
  Divider,
  ListItemSecondaryAction,
  FormHelperText,
} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import moment from "moment-timezone";

//===========================|| DASHBOARD DEFAULT - EARNING CARD ||===========================//
const types = {
  PENDIENTE: "#c79c00",
  PROCESO: "#0095c7",
  FINALIZADO: "#53c700",
  AUSENTE: "#53c700",
  CANCELADO: "#b30018",
};

const QuotesList = ({ data }) => {
  return (
    <React.Fragment>
      <Card>
        <CardContent>
          <Typography variant="body1" component="span">
            <b>Listado de citas</b>
            <Divider />
          </Typography>
          <List
            dense
            style={{
              maxHeight: "calc((100vh) - 420px)",
              overflowY: "auto",
              minHeight: 300,
            }}
          >
            {data.map((el, ind) => (
              <ListItem
                key={ind}
                disablePadding
                style={{ borderBottom: `1px solid ${types[el.status]}` }}
              >
                <ListItemIcon>
                  <ArrowRightIcon style={{ color: types[el.status] }} />
                </ListItemIcon>
                <ListItemText
                  primary={`${el.patient.f_name} ${el.patient.l_name}`}
                  secondary={`${moment(el.start).format("ddd D MMM, hh:mm a")}`}
                />
                <ListItemSecondaryAction>
                  <FormHelperText style={{ color: types[el.status] }}>
                    {el.status}
                  </FormHelperText>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export default QuotesList;
