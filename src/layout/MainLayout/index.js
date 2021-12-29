import PropTypes from "prop-types";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

// material-ui
import { useTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { AppBar, CssBaseline, Toolbar, useMediaQuery } from "@mui/material";

// third-party
import clsx from "clsx";
import { SET_MENU } from "redux/actions";
// project imports
import Header from "./Header";
import Sidebar from "./Sidebar";

// assets
const drawerWidth = 260;
// style constant
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    paddingTop: 90,
  },
  appBar: {
    backgroundColor: theme.palette.background.default,
    zIndex: 99,
  },
  appBarWidth: {
    transition: theme.transitions.create("width"),
    backgroundColor: theme.palette.background.default,
    zIndex: 99,
  },
  content: {
    ...theme.typography.mainContent,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.up("md")]: {
      marginLeft: -(drawerWidth - 20),
      // width: `calc(100% - ${drawerWidth}px)`,
      width: "calc((100vw) - 30px) !important",
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: "20px",
      // width: `calc(100% - ${drawerWidth}px)`,
      width: "calc((100vw) - 30px) !important",
      padding: "16px",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "10px",
      width: `calc(100% - ${drawerWidth}px)`,
      padding: "16px",
      marginRight: "10px",
    },
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    [theme.breakpoints.down("md")]: {
      marginLeft: "20px",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "10px",
    },
  },
}));

//-----------------------|| MAIN LAYOUT ||-----------------------//

const MainLayout = ({ children }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down("lg"));

  // Handle left drawer
  const leftDrawerOpened = useSelector((state) => state.customization.opened);

  const dispatch = useDispatch();

  const handleLeftDrawerToggle = () => {
    dispatch({ type: SET_MENU, opened: !leftDrawerOpened });
  };

  React.useEffect(() => {
    dispatch({ type: SET_MENU, opened: !matchDownMd });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchDownMd]);

  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* header */}
      <AppBar
        position="fixed"
        color="inherit"
        elevation={0}
        className={leftDrawerOpened ? classes.appBarWidth : classes.appBar}
      >
        <Toolbar>
          <Header handleLeftDrawerToggle={handleLeftDrawerToggle} />
        </Toolbar>
      </AppBar>

      {/* drawer */}
      <Sidebar
        drawerOpen={leftDrawerOpened}
        drawerToggle={handleLeftDrawerToggle}
      />

      {/* main content */}
      <main
        className={clsx([
          classes.content,
          {
            [classes.contentShift]: leftDrawerOpened,
          },
        ])}
      >
        {children}
      </main>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
