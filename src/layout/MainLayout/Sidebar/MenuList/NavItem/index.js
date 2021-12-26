import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// material-ui
import { makeStyles } from "@mui/styles";
import {
  Avatar,
  Chip,
  ListItemText,
  Typography,
  useMediaQuery,
  Box,
} from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";

// project imports

// assets
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

// style constant
const useStyles = makeStyles((theme) => ({
  listIcon: {
    minWidth: "18px",
    marginTop: "auto",
    marginBottom: "auto",
  },
  listCustomIconSub: {
    width: "6px",
    height: "6px",
  },
  listCustomIconSubActive: {
    width: "8px",
    height: "8px",
  },
  listItem: {
    marginBottom: "5px",
    alignItems: "center",
  },
  listItemNoBack: {
    marginBottom: "5px",
    backgroundColor: "transparent !important",
    paddingTop: "8px",
    paddingBottom: "8px",
    alignItems: "flex-start",
  },
  subMenuCaption: {
    ...theme.typography.subMenuCaption,
  },
}));

//-----------------------|| SIDEBAR MENU LIST ITEMS ||-----------------------//

const NavItem = ({ item, level }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const customization = useSelector((state) => state.customization);
  const matchesSM = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const Icon = item.icon;
  const itemIcon = item.icon ? (
    <Icon stroke={1.5} size="1.3rem" className={classes.listCustomIcon} />
  ) : (
    <FiberManualRecordIcon
      className={
        customization.isOpen.findIndex((id) => id === item.id) > -1
          ? classes.listCustomIconSubActive
          : classes.listCustomIconSub
      }
      fontSize={level > 0 ? "inherit" : "default"}
    />
  );

  // let itemIconClass = !item.icon ? classes.listIcon : classes.menuIcon;
  // itemIconClass =
  //   customization.navType === "nav-dark"
  //     ? [itemIconClass, classes.listCustomIcon].join(" ")
  //     : itemIconClass;

  let itemTarget = "";
  if (item.target) {
    itemTarget = "_blank";
  }

  let listItemProps = {
    component: React.forwardRef((props, ref) => (
      <Link {...props} to={item.url} />
    )),
  };
  if (item.external) {
    listItemProps = { component: "a", href: item.url };
  }

  const itemHandler = (id) => {};

  // active menu item on page load
  React.useEffect(() => {
    // const currentIndex = document.location.pathname
    //   .toString()
    //   .split("/")
    //   .findIndex((id) => id === item.id);
    // eslint-disable-next-line
  }, []);

  return (
    <ListItemButton
      {...listItemProps}
      disabled={item.disabled}
      className={level > 1 ? classes.listItemNoBack : classes.listItem}
      sx={{ borderRadius: customization.borderRadius + "px" }}
      selected={customization.isOpen.findIndex((id) => id === item.id) > -1}
      onClick={() => {
        itemHandler(item.id);
      }}
      target={itemTarget}
      style={{ paddingLeft: level * 23 + "px" }}
    >
      <Box pr={1}>{itemIcon}</Box>
      <ListItemText
        primary={
          <Typography
            variant="body2"
            color="inherit"
            style={{
              letterSpacing: "0em",
              fontWeight: 400,
              lineHeight: "1.5em",
            }}
          >
            {item.title}
          </Typography>
        }
        secondary={
          item.caption && (
            <Typography
              variant="caption"
              className={classes.subMenuCaption}
              display="block"
              gutterBottom
              style={{ fontSize: "0.75rem", fontWeight: 400 }}
            >
              {item.caption}
            </Typography>
          )
        }
      />
      {item.chip && (
        <Chip
          color={item.chip.color}
          variant={item.chip.variant}
          size={item.chip.size}
          label={item.chip.label}
          avatar={item.chip.avatar && <Avatar>{item.chip.avatar}</Avatar>}
        />
      )}
    </ListItemButton>
  );
};

NavItem.propTypes = {
  item: PropTypes.object,
  level: PropTypes.number,
};

export default NavItem;
