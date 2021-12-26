import React from "react";
import { Link } from "react-router-dom";

// material-ui
import { ButtonBase } from "@mui/material";

// project imports
import logo from "assets/images/logo.png";

//-----------------------|| MAIN LOGO ||-----------------------//

const LogoSection = () => {
  return (
    <ButtonBase disableRipple component={Link} to={{ pathname: "/" }}>
      <img src={logo} />
    </ButtonBase>
  );
};

export default LogoSection;
