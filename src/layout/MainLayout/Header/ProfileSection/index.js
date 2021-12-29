import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useSelector } from "react-redux";

// material-ui
import { useTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import {
  Avatar,
  CardContent,
  Chip,
  ClickAwayListener,
  Divider,
  Grid,
  List,
  ListItemIcon,
  ListItemText,
  Paper,
  Popper,
  Typography,
  Card,
} from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import moment from "moment";
import user from "utils/userDetails";
import tenedorLogo from "assets/images/logo.png";

// third-party
import AuthenticationService from "auth/AuthenticationService";

// assets
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

// style const
const useStyles = makeStyles((theme) => ({
  navContainer: {
    width: "100%",
    maxWidth: "350px",
    minWidth: "300px",
    backgroundColor: theme.palette.background.paper,
    borderRadius: "10px",
    [theme.breakpoints.down("sm")]: {
      minWidth: "100%",
    },
  },
  headerAvatar: {
    cursor: "pointer",
    ...theme.typography.mediumAvatar,
    margin: "8px 0 8px 8px !important",
  },
  profileChip: {
    height: "48px",
    alignItems: "center",
    borderRadius: "27px",
    transition: "all .2s ease-in-out",
    borderColor: theme.palette.primary.light,
    backgroundColor: theme.palette.primary.light,
    '&[aria-controls="menu-list-grow"], &:hover': {
      borderColor: theme.palette.primary.main,
      background: theme.palette.primary.main + "!important",
      color: theme.palette.primary.light,
      "& svg": {
        stroke: theme.palette.primary.light,
      },
    },
  },
  profileLabel: {
    lineHeight: 0,
    padding: "12px",
  },
  listItem: {
    marginTop: "5px",
  },
  cardContent: {
    padding: "16px !important",
  },
  flex: {
    display: "flex",
  },
  name: {
    marginLeft: "2px",
    fontWeight: 400,
  },
}));

//-----------------------|| PROFILE MENU ||-----------------------//

const ProfileSection = () => {
  const classes = useStyles();
  const theme = useTheme();
  const customization = useSelector((state) => state.customization);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleLogout = async () => {
    AuthenticationService.logout()
      .then(() => {
        window.location.reload();
      })
      .catch(() => {
        window.location.reload();
      });
  };

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    handleClose(event);
  };
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  const prevOpen = React.useRef(open);

  const getSaludo = () => {
    const hour = moment().hour();
    if (hour > 17) return "Buenas noches";
    if (hour > 11) return "Buenas tardes";
    return "Buenos días";
  };

  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);

  return (
    <React.Fragment>
      <Chip
        classes={{ label: classes.profileLabel }}
        className={classes.profileChip}
        icon={
          <Avatar
            src={tenedorLogo}
            className={classes.headerAvatar}
            aria-controls={open ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            color="inherit"
          />
        }
        label={
          <SettingsIcon
            stroke={1.5}
            size="1.5rem"
            color={theme.palette.primary.main}
          />
        }
        variant="outlined"
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        color="primary"
      />
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        style={{ right: 0, left: "auto", top: 65 }}
      >
        {open && (
          <Paper elevation={10}>
            <ClickAwayListener onClickAway={handleClose}>
              <Card
                border={false}
                elevation={16}
                content={false}
                boxShadow
                shadow={theme.shadows[16]}
              >
                <CardContent className={classes.cardContent}>
                  <Grid container direction="column" spacing={0}>
                    <Grid item className={classes.flex}>
                      <Typography
                        variant="h4"
                        style={{ fontSize: "1rem", fontWeight: 600 }}
                      >
                        {getSaludo()},{" "}
                      </Typography>
                      <Typography
                        component="span"
                        variant="h4"
                        style={{ fontSize: "1rem", fontWeight: 600 }}
                        className={classes.name}
                      >
                        {user.data.f_name}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="subtitle2"
                        style={{ fontSize: "0.75rem", fontWeight: 400 }}
                      >
                        {user.roles?.map((e) => e.toUpperCase() + " ")}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Divider />
                  <List component="nav" className={classes.navContainer}>
                    <ListItemButton
                      className={classes.listItem}
                      sx={{
                        borderRadius: customization.borderRadius + "px",
                      }}
                      selected={selectedIndex === 0}
                      onClick={(event) => handleListItemClick(event, 0)}
                      component={React.forwardRef((props, ref) => (
                        <RouterLink {...props} to="/config" />
                      ))}
                    >
                      <ListItemIcon>
                        <SettingsIcon stroke={1.5} size="1.3rem" />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography
                            variant="body2"
                            style={{
                              letterSpacing: "0em",
                              fontWeight: 400,
                              lineHeight: "1.5em",
                            }}
                          >
                            Configuración
                          </Typography>
                        }
                      />
                    </ListItemButton>

                    <ListItemButton
                      className={classes.listItem}
                      sx={{
                        borderRadius: customization.borderRadius + "px",
                      }}
                      selected={selectedIndex === 0}
                      onClick={(event) => handleListItemClick(event, 0)}
                      component={React.forwardRef((props, ref) => (
                        <RouterLink {...props} to="/profile" />
                      ))}
                    >
                      <ListItemIcon>
                        <PersonOutlineIcon stroke={1.5} size="1.3rem" />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography
                            variant="body2"
                            style={{
                              letterSpacing: "0em",
                              fontWeight: 400,
                              lineHeight: "1.5em",
                            }}
                          >
                            Cuenta
                          </Typography>
                        }
                      />
                    </ListItemButton>
                    <ListItemButton
                      className={classes.listItem}
                      sx={{
                        borderRadius: customization.borderRadius + "px",
                      }}
                      selected={selectedIndex === 4}
                      onClick={handleLogout}
                    >
                      <ListItemIcon>
                        <ExitToAppIcon stroke={1.5} size="1.3rem" />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography
                            variant="body2"
                            style={{
                              letterSpacing: "0em",
                              fontWeight: 400,
                              lineHeight: "1.5em",
                            }}
                          >
                            Salir
                          </Typography>
                        }
                      />
                    </ListItemButton>
                  </List>
                </CardContent>
              </Card>
            </ClickAwayListener>
          </Paper>
        )}
      </Popper>
    </React.Fragment>
  );
};

export default ProfileSection;
