import React, { useState } from "react";
import { isBrowser } from "react-device-detect";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useFormik } from "formik";
import { queryServerApi } from "./utils/queryServerApi";
import { useHistory } from "react-router-dom";
import "../App.css";
import "./StaticWebPage/StaticWebPage.css";

import {
  Nav,
  NavContainer,
  NavLogo,
  NavItem,
  NavLinks,
  NavMenu,
  MobileIcon,
} from "./StaticWebPage/StaticWebPageStyles";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        ODC
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Register() {
  const History = useHistory();
  const classes = useStyles();
  const [colorChange, setColorchange] = useState(false);
  const [mob, setMob] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      last_name: "",
      email: "",
      password: "",
      address: "",
      phonr_number: "",
      img: "",
    },
    onSubmit: async (values) => {
      console.log("Values", values.img);
      const [res, err] = await queryServerApi(
        "user/register",
        values,
        "POST",
        true
      );
      console.log(err);
      console.log("res = ", res);
      History.push("/Signin");
      History.go(0);
    },
  });

  return (
    <div>
      {isBrowser ? (
        <Nav id="nav" className={colorChange ? "navbar colorChange" : "navbar"}>
          <NavContainer>
            <NavLogo href="/home">
              Clean
              <span
                className="it"
                Style="color:crimson;letter-spacing:0px;font-size:30px"
              >
                IT
              </span>
            </NavLogo>
            <MobileIcon></MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks href="#serv">Services</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks href="#about">About Us</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks href="#Team">Team</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks href="#footer">Contact</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks href="SignIn">
                  <i className="fa fa-user" aria-hidden="true"></i>
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavContainer>
        </Nav>
      ) : (
        <div class="topnav">
          <a href="/" class="active">
            Clean <span Style="color:crimson">IT</span>
          </a>
          {mob ? (
            <div id="myLinks">
              <a href="#serv">Services</a>
              <a href="#about">About Us</a>
              <a href="#footer">Contact</a>
              <a href="SignIn">Login</a>
            </div>
          ) : (
            console.log("")
          )}
          <a
            href="javascript:void(0);"
            class="icon"
            onClick={() => setMob(!mob)}
          >
            <i class="fa fa-bars"></i>
          </a>
        </div>
      )}
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form
            className={classes.form}
            noValidate
            onSubmit={formik.handleSubmit}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={(event) => {
                    formik.setFieldValue("name", event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  onChange={(event) => {
                    formik.setFieldValue("last_name", event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(event) => {
                    formik.setFieldValue("email", event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="password"
                  onChange={(event) => {
                    formik.setFieldValue("password", event.target.value);
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="address"
                  label="address"
                  type="text"
                  id="address"
                  autoComplete="address"
                  onChange={(event) => {
                    formik.setFieldValue("address", event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="phone_number"
                  label="phone_number"
                  type="number"
                  id="number"
                  autoComplete="phonr_number"
                  onChange={(event) => {
                    formik.setFieldValue("phonr_number", event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="image"
                  type="file"
                  id="image"
                  onChange={(event) => {
                    formik.setFieldValue("img", event.target.files[0]);
                  }}
                />
                <p>
                  {" "}
                  <span Style="font-weight:bold">NB:</span> choose the right
                  picture for the face recognition{" "}
                </p>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="SignIn" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}
