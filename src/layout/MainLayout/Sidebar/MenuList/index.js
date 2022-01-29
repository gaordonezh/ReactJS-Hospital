import React from "react";

// material-ui
import { Typography } from "@mui/material";

// project imports
import NavGroup from "./NavGroup";
import itemsNav from "config";

//-----------------------|| SIDEBAR MENU LIST ||-----------------------//

const MenuList = () => {
  const navItems = itemsNav.map((item) => {
    switch (item.type) {
      case "group":
        return <NavGroup key={item.id} item={item} />;
      default:
        return (
          <Typography
            key={item.id}
            variant="h6"
            color="error"
            align="center"
            style={{ fontWeight: 500, fontSize: "0.75rem" }}
          >
            Menu Items Error
          </Typography>
        );
    }
  });

  return navItems;
};

export default MenuList;
