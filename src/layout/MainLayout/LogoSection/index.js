import React from "react";
import { Link } from "react-router-dom";

// material-ui
import { ButtonBase } from "@mui/material";

// project imports
import userDetails from "utils/userDetails";

//-----------------------|| MAIN LOGO ||-----------------------//

const LogoSection = () => {
  return (
    <ButtonBase
      component={Link}
      to={{ pathname: "/" }}
      style={{ height: "88px" }}
    >
      <img src={userDetails.logoCompany} height="50px" />
    </ButtonBase>
  );
};

export default LogoSection;
