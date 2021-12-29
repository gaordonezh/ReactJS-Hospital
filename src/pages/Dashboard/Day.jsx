import React from "react";
import { Avatar, Grid, Typography, Card, CardContent } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundImage:
      "url(https://image.freepik.com/free-photo/grunge-paint-background_1409-1337.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "top right",
    height: "100%",
  },
  avatar: {
    marginTop: "8px",
  },
  avatarCircle: {
    cursor: "pointer",
    backgroundColor: "#fff",
  },
  circleIcon: {
    transform: "rotate3d(1, 1, 1, 45deg)",
    color: "#048bad",
  },
}));

//===========================|| DASHBOARD DEFAULT - EARNING CARD ||===========================//

const Day = ({ title, value, top, h }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Card className={classes.card}>
        <CardContent style={{ paddingTop: 20 * top, height: "100%" }}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography variant={h}>
                <b>{value}</b>
              </Typography>
            </Grid>
            <Grid item>
              <Avatar className={classes.avatarCircle}>
                <ArrowUpwardIcon
                  fontSize="inherit"
                  className={classes.circleIcon}
                />
              </Avatar>
            </Grid>
          </Grid>
          <Typography variant="body1">
            <b>{title}</b>
          </Typography>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export default Day;
