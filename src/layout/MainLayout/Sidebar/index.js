import PropTypes from "prop-types";
import React from "react";

// material-ui
import { useTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { Box, Drawer, Hidden, useMediaQuery } from "@mui/material";

// third-party
import PerfectScrollbar from "react-perfect-scrollbar";

// project imports
import MenuList from "./MenuList";
import LogoSection from "../LogoSection";

// style constant
const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: 250,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: 250,
    background: theme.palette.background.default,
    color: theme.palette.text.primary,
    borderRight: "none",
    [theme.breakpoints.up("md")]: {
      top: "88px",
    },
    zIndex: 99,
  },
  ScrollHeight: {
    height: "calc(100vh - 88px)",
    paddingLeft: "16px",
    paddingRight: "16px",
    [theme.breakpoints.down("sm")]: {
      height: "calc(100vh - 56px)",
    },
  },
  boxContainer: {
    display: "flex",
    padding: "16px",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

//-----------------------|| SIDEBAR DRAWER ||-----------------------//

const Sidebar = ({ drawerOpen, drawerToggle, window }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchUpMd = useMediaQuery(theme.breakpoints.up("md"));

  const drawer = (
    <React.Fragment>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <div className={classes.boxContainer}>
          <LogoSection />
        </div>
      </Box>
      <Hidden mdUp>
        <PerfectScrollbar component="div" className={classes.ScrollHeight}>
          <MenuList />
        </PerfectScrollbar>
      </Hidden>
      <Hidden mdDown>
        <Box sx={{ px: 2 }}>
          <MenuList />
        </Box>
      </Hidden>
    </React.Fragment>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      <Drawer
        container={container}
        variant={matchUpMd ? "persistent" : "temporary"}
        anchor="left"
        open={drawerOpen}
        onClose={drawerToggle}
        classes={{
          paper: classes.drawerPaper,
        }}
        ModalProps={{ keepMounted: true }}
        color="inherit"
      >
        {drawer}
      </Drawer>
    </nav>
  );
};

Sidebar.propTypes = {
  drawerOpen: PropTypes.bool,
  drawerToggle: PropTypes.func,
  window: PropTypes.object,
};

export default Sidebar;
