import IA from "./IAsignin";
import React, { useState, useEffect } from "react";
import img from "./utils/1.gif";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { queryServerApi } from "./utils/queryServerApi";
import Voice from "./chatBotOptimezed/ChatBotMain";
import { isMobile, isBrowser, isTablet } from "react-device-detect";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignIn() {
  const test = localStorage.getItem("IA");
  const [bool, setBool] = useState(true);

  useEffect(async () => {
    await setTimeout(async () => {
      setBool(false);
      console.log(bool);
    }, 2500);
    setFace(test);
    console.log(test);
    localStorage.removeItem("IA");
  }, []);
  const classes = useStyles();
  /////////////////////////////////
  var history = useHistory();
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  var [Femail, setFemail] = useState("");
  var [Face, setFace] = useState(false);
  var [Fpassword, setFpassword] = useState(true);
  var emailControl = (e) => {
    setEmail(e.target.value);
  };

  var passwordControl = (e) => {
    setPassword(e.target.value);
  };

  var sub = async (e) => {
    e.preventDefault();
    var Token = "";
    var id = "";
    var nbMobile = 0;
    var nbDesktop = 0;
    var nbTablette = 0;

    if (isTablet) nbTablette = 1;
    if (isMobile) nbMobile = 1;
    if (isBrowser) nbDesktop = 1;
    await queryServerApi(
      "device/add",
      {
        nbMobile: nbMobile,
        nbDesktop: nbDesktop,
        nbTablette: nbTablette,
      },
      "POST",
      false
    );

    var store = {
      email: email,
      password: password,
    };

    await queryServerApi("user/login", store, "POST", false)
      .then((data) => {
        console.log(store);
        console.log(data[0].id);
        //console.log(data.id);
        //       setToken(data[0].token);
        //     setId(data[0].id);
        Token = data[0].token;
        id = data[0].id;

        console.log(data);
      })
      .catch(console.log("erreur"));

    console.log(id);
    /*
    await axios
      .post("http://localhost:3000/user/login", store)
      .then((data) => {
        setToken(data.data.token);
        setId(data.data.id);
        console.log(data);
      })

      .catch(console.log("erreur of get"));
    console.log(id);
      */
    var role = "";
    var name = "";
    var ids = "";
    await axios
      .get("http://localhost:3000/user/" + id, {
        headers: { Authorization: `Bearer ${Token}` },
      })
      .then((data) => {
        role = data.data.role;
        name = data.data.name;
        ids = data.data._id;
        console.log(data.role);
      })
      .catch(console.log("user not exist"));
    console.log(role);
    localStorage.setItem("role", role);
    localStorage.setItem("id", ids);
    localStorage.setItem("name", name);
    if (role === "admin") {
      history.push("/Adminspace/dashboard");
      history.go(0);
    } else if (role === "user") {
      history.push("/Clientspace/services");
      history.go(0);
    }
  };
  var startIA = () => {
    setFace(true);
  };

  var sendEmail = async () => {
    var [us, err] = await queryServerApi(
      "user/passwordForgotten",
      { email: Femail },
      "POST",
      true
    );
    if (us.email !== "undefined") {
      console.log(us);
      Fpassword = true;
      alert("An email has been sent with sucess");
      // history.push("/Signin");
      // history.go(0);
      console.log("sucess");
    } else if (err) {
      console.log("hh");
    }
  };

  ///////////////////////////////////////////
  return (
    <div>
      {bool ? (
        <center>
          <img Style="width:40%;height : 40% ; margin-top : 150px" src={img} />
        </center>
      ) : (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>

            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            {Fpassword ? (
              Face ? (
                <IA />
              ) : (
                <form className={classes.form} noValidate>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange={emailControl}
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={passwordControl}
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={sub}
                  >
                    Sign In
                  </Button>
                  <center>
                    <br />
                    <p>
                      {" "}
                      Sign in with{" "}
                      <button
                        type="button"
                        className="btn btn-outline-primary btn-large"
                        onClick={startIA}
                      >
                        <i className="fa fa-camera "> Face recognition</i>
                      </button>
                    </p>
                  </center>
                  <br />

                  <Grid container>
                    <Grid item xs>
                      <Link
                        href="#"
                        variant="body2"
                        onClick={() => {
                          setFpassword(false);
                          console.log(Fpassword);
                        }}
                      >
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="Register" variant="body2">
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                </form>
              )
            ) : (
              <div>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="Femail"
                  label="Email"
                  type="email"
                  id="Femail"
                  autoComplete="current-Femail"
                  onChange={(event) => setFemail(event.target.value)}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={sendEmail}
                >
                  Send email
                </Button>
              </div>
            )}
          </div>
          <Voice />
          <Box mt={8}>
            <Copyright />
          </Box>
        </Container>
      )}
    </div>
  );
}

export default SignIn;
