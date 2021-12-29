import React from "react";
import { Link } from "react-router-dom";

// material-ui
import { ButtonBase } from "@mui/material";

// project imports
import logo from "assets/images/logo.png";

//-----------------------|| MAIN LOGO ||-----------------------//

const LogoSection = () => {
  return (
    <ButtonBase
      component={Link}
      to={{ pathname: "/" }}
      style={{ height: "88px" }}
    >
      <img src={logo} height="50px" />
    </ButtonBase>
  );
};

export default LogoSection;
