import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";

// material-ui
import { makeStyles } from "@mui/styles";
import { Avatar, Box, ButtonBase, IconButton, Badge } from "@mui/material";

import axios from "axios";
import AuthenticationService from "auth/AuthenticationService";
import SessionStorageService from "auth/SessionStorageService";
// project imports
import LogoSection from "../LogoSection";
import ProfileSection from "./ProfileSection";
/* import NotificationSection from "./NotificationSection"; */
import ChangeRestaurant from "./ChangeRestaurant";
import user from "utils/userDetails";
// assets
import MenuIcon from "@mui/icons-material/Menu";
import logo from "assets/images/logo.png";
import { api } from "utils/api";
import session from "config/session";
import { notification } from "antd";

// style constant
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  headerAvatar: {
    ...theme.typography.commonAvatar,
    ...theme.typography.mediumAvatar,
    transition: "all .2s ease-in-out",
    background: theme.palette.secondary.light,
    color: theme.palette.secondary.dark,
    "&:hover": {
      background: theme.palette.secondary.dark,
      color: theme.palette.secondary.light,
    },
  },
  boxContainer: {
    width: "228px",
    display: "flex",
    [theme.breakpoints.down("md")]: {
      width: "auto",
    },
  },
}));

//-----------------------|| MAIN NAVBAR / HEADER ||-----------------------//

const Header = ({ handleLeftDrawerToggle }) => {
  const classes = useStyles();
  const [webOrders, setWebOrders] = useState(null);
  const [totalVouchers, setTotalVouchers] = useState(0);

  const getInitialData = async () => {
    try {
      // const resBoletas = await getFacturacion("boleta");
      // const resFacturas = await getFacturacion("factura");
      // setBoletas(resBoletas);
      // setFacturas(resFacturas);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInitialData();
  }, []);

  const getValidationToken = async () => {
    let res = await axios.get(`${api}/auth/validToken`, {
      headers: { Authorization: user.token },
    });
    if (res.data.message === false) {
      notification["error"]({
        message: "Uy",
        description: `La sesión ha expirado`,
      });
      handleLogout();
    }
  };

  useEffect(() => {
    getValidationToken();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleLogout = () => {
    AuthenticationService.logout().then(() => {
      SessionStorageService.remove(session);
      // history.push(`/login`);
      window.location.reload();
    });
  };
  return (
    <React.Fragment>
      {/* logo & toggler button */}
      <div
        className={classes.boxContainer}
        style={{
          backgroundColor:
            user.restaurant._id === "6179ca5193abe77cf954f62c" ? "red" : "",
        }}
      >
        <Box
          component="span"
          sx={{ display: { xs: "none", md: "block" }, flexGrow: 1 }}
        >
          <LogoSection />
        </Box>
        <ButtonBase sx={{ borderRadius: "12px", overflow: "hidden" }}>
          <Avatar
            variant="rounded"
            className={classes.headerAvatar}
            onClick={handleLeftDrawerToggle}
            color="inherit"
          >
            <MenuIcon stroke={1.5} size="1.3rem" />
          </Avatar>
        </ButtonBase>
      </div>
      <Box pl={3} style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} style={{ height: 85 }} alt="logo de NapFood" />
        {(user.roles?.includes("superadmin") ||
          user.roles?.includes("admin") ||
          user.rol === "superadmin") && <ChangeRestaurant />}
      </Box>
      {/* header search */}
      <div className={classes.grow} />
      {/* notification & profile */}
      {/* <NotificationSection /> */}

      {(user.roles?.includes("superadmin") ||
        user.roles?.includes("admin") ||
        user.roles?.includes("caja") ||
        user.rol === "superadmin") && (
        <>
          {totalVouchers > 0 && user.restaurant.facturation && (
            <Box
              style={{
                paddingRight: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IconButton
                color="primary"
                href={`/facturacion/pendientes`}
                className={totalVouchers > 0 && "bell-shake"}
              >
                <Badge badgeContent={totalVouchers} color="error">
                  <span style={{ fontSize: "1.2rem", fontWeight: "700" }}>
                    SUNAT
                  </span>
                </Badge>
              </IconButton>
            </Box>
          )}

          <Box
            style={{
              paddingRight: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconButton
              color="primary"
              href={`/lista/pedidos`}
              className={webOrders.quantity > 0 && "bell-shake"}
            >
              <Badge badgeContent={webOrders.quantity} color="error">
                <MenuIcon style={{ width: 30, height: 30 }} />
              </Badge>
            </IconButton>
          </Box>
        </>
      )}

      <ProfileSection />
    </React.Fragment>
  );
};

Header.propTypes = {
  handleLeftDrawerToggle: PropTypes.func,
};

export default Header;
