import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import "./nav.css";

import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [user, setUser] = useState("");
  const id = localStorage.getItem("id");

  useEffect(async () => {
    const data = await fetch("https://appcleanit.herokuapp.com/user/" + id);
    const p = await data.json();
    setUser(p);
  }, []);
  History = useHistory();
  const logOut = () => {
    window.localStorage.clear();
    History.push("/home");
    History.go(0);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const imgs = "https://appcleanit.herokuapp.com/user/Uploads/" + user.img;

  return (
    <div className={classes.root}>
      <AppBar position="static" Style="background-color : black">
        <Toolbar>
          <Typography variant="h5" className={classes.title} id="clean">
            Clean IT
          </Typography>

          <Typography variant="h10" className={classes.title}>
            {" "}
            <span>
              {" "}
              <a href="/Clientspace/services"> Services </a>
            </span>{" "}
          </Typography>

          <Typography variant="h10" className={classes.title}>
            {" "}
            <span>
              {" "}
              <a href="/Clientspace/monitoring"> Monitoring services </a>
            </span>{" "}
          </Typography>
          <Typography variant="h10" className={classes.title}>
            {" "}
            <a href="/Clientspace/claim">Claim </a>
          </Typography>

          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <img
                  src={imgs}
                  Style="width:35px; height : 35px; border-radius:100%"
                />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  <a href="/Clientspace/profile">Profile</a>
                </MenuItem>
                <MenuItem onClick={logOut}>Logout</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
