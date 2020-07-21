import React, { useState, useCallback } from "react";
import { IconButton, Menu, makeStyles, MenuItem } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  buttonCollapse: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    margin: "10px",
    boxShadow: "none",
  },
  links: {
    textDecoration: "none",
  },
}));

export const CollapsedNavbar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = !!anchorEl;

  const handleToggle = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(anchorEl ? null : event.currentTarget);
    },
    [anchorEl]
  );

  return (
    <div className={classes.buttonCollapse}>
      <IconButton onClick={handleToggle} color="inherit">
        <MenuIcon />
      </IconButton>

      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        onClose={handleToggle}
      >
        <MenuItem>
          <Link to="/buy" className={classes.links}>
            Buy bitcoin
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/sell" className={classes.links}>
            Sell bitcoin
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/wallet" className={classes.links}>
            Wallet
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/support" className={classes.links}>
            Support
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/account" className={classes.links}>
            Your account
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
};
