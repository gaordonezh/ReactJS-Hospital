import React from "react";
import Page from "components/Page";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import HouseSidingIcon from "@mui/icons-material/HouseSiding";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";

const list = [
  { label: "GENERAL", link: "/resume/general", icon: AccountTreeIcon },
  { label: "EDIFICIOS", link: "/resume/buildings", icon: CorporateFareIcon },
  { label: "NIVELES", link: "/resume/levels", icon: HouseSidingIcon },
  { label: "UPSS", link: "/resume/upss", icon: MeetingRoomIcon },
];

const Resumen = () => {
  return (
    <Page helper="RESUMEN GENERAL" title="RESUMEN GENERAL">
      <Box mt={2} ml={1}>
        <Grid container spacing={1}>
          {list.map((item, index) => (
            <Grid item xs={12} md={6} lg={4} xl={3} key={index}>
              <Card variant="outlined" align="center">
                <CardActionArea LinkComponent={Link} to={item.link}>
                  <CardContent>
                    <item.icon sx={{ fontSize: 50, color: "#555" }} />
                    <Typography variant="subtitle1" sx={{ mt: 2 }}>
                      {item.label}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Page>
  );
};

export default Resumen;
