import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

function not(a, b) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

function union(a, b) {
  return [...a, ...not(b, a)];
}

export default function TransferList(props) {
  const {
    dataLeft = [],
    dataRight = [],
    setDataLeft = [],
    setDataRight = [],
    titleLeft = "■",
    titleRight = "■",
  } = props;

  const [checked, setChecked] = useState([]);
  const leftChecked = intersection(checked, dataLeft);
  const rightChecked = intersection(checked, dataRight);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const numberOfChecked = (items) => intersection(checked, items).length;

  const handleToggleAll = (items) => () => {
    if (numberOfChecked(items) === items.length) {
      setChecked(not(checked, items));
    } else {
      setChecked(union(checked, items));
    }
  };

  const handleCheckedRight = () => {
    setDataRight(dataRight.concat(leftChecked));
    setDataLeft(not(dataLeft, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setDataLeft(dataLeft.concat(rightChecked));
    setDataRight(not(dataRight, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const customList = (title, items) => (
    <Card elevation={2}>
      <CardHeader
        sx={{ px: 2, py: 1 }}
        avatar={
          <Checkbox
            onClick={handleToggleAll(items)}
            checked={
              numberOfChecked(items) === items.length && items.length !== 0
            }
            indeterminate={
              numberOfChecked(items) !== items.length &&
              numberOfChecked(items) !== 0
            }
            disabled={items.length === 0}
          />
        }
        title={title}
        subheader={`${numberOfChecked(items)}/${items.length} seleccionados`}
      />
      <Divider />
      <List
        sx={{
          maxHeight: 200,
          overflow: "auto",
        }}
        dense
        component="div"
        role="list"
      >
        {items.length > 0 ? (
          items.map((value, index) => (
            <ListItem
              key={index}
              role="listitem"
              button
              onClick={handleToggle(value)}
            >
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                />
              </ListItemIcon>
              <ListItemText primary={value.name} />
            </ListItem>
          ))
        ) : (
          <Typography variant="caption" color="gray">
            <Box pt={5} pb={5}>
              <Typography align="center" variant="inherit">
                AQUÍ SE MOSTRARÁ LA INFORMACIÓN
              </Typography>
            </Box>
          </Typography>
        )}
      </List>
    </Card>
  );

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} />
      <Grid item xs={12} md={5}>
        {customList(titleLeft, dataLeft)}
      </Grid>
      <Grid item xs={12} md={2}>
        <Grid
          container
          style={{ height: "100%" }}
          direction="column"
          justifyContent="center"
          spacing={1}
        >
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              onClick={handleCheckedRight}
              disabled={leftChecked.length === 0}
            >
              &gt;
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              onClick={handleCheckedLeft}
              disabled={rightChecked.length === 0}
            >
              &lt;
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={5}>
        {customList(titleRight, dataRight)}
      </Grid>
    </Grid>
  );
}
