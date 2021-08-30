import SignIn from "./Components/SignIn";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarStatic from "./Components/StaticWebPage/staticWebPage";
import MenuAppBar from "./Components/ClientSpace/navbar";
import Monitoring from "./Components/ClientSpace/Monitoring";
import Service from "./Components/ClientSpace/service";
import Claim from "./Components/ClientSpace/Claim";
import pA from "./Components/ClientSpace/profile";
import Register from "./Components/Register";
import Profile from "./Components/ClientSpace/profile";
import Footer from "./Components/footer";
import Dashboard from "./Components/dashboard/Dashboard";
import NavAdm from "./Components/dashboard/navbar";
import monAdmin from "./Components/dashboard/Espace Admin/adminService";
import clmAdmin from "./Components/dashboard/Espace Admin/cadminClaim";
import pmem from "./Components/dashboard/Espace Admin/members";
import { Redirect } from "react-router";
const Role = localStorage.getItem("role");
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={NavbarStatic} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route path="/Register" component={Register} />
        <Route path="/Signin" component={SignIn} />
        {Role === "user" && (
          <>
            <Router>
              <MenuAppBar />
              <Switch>
                <Route path="/Clientspace/Profile" component={Profile} />

                <Route path="/Clientspace/services" component={Service} />
                <Route path="/Clientspace/claim" component={Claim} />

                <Route path="/Clientspace/monitoring" component={Monitoring} />
              </Switch>
            </Router>
          </>
        )}
        {Role === "admin" && (
          <>
            <NavAdm />
            <Router>
              <Switch>
                <Route path="/Adminspace/services" component={monAdmin} />
                <Route path="/Adminspace/claim" component={clmAdmin} />

                <Route path="/Adminspace/dashboard" component={Dashboard} />
                <Route path="/Adminspace/profile" component={pA} />
                <Route path="/Adminspace/members" component={pmem} />
              </Switch>
            </Router>
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App;
