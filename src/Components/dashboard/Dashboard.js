import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Box, Container, Grid } from "@material-ui/core";
import Sales from "./Sales";
import TasksProgress from "./TasksProgress";
import TotalCustomers from "./TotalCustomers";
import TotalProfit from "./TotalProfit";
import TrafficByDevice from "./TrafficByDevice";
import img from "../utils/1.gif";

const Dashboard = () => {
  const [bool, setBool] = useState(true);
  useEffect(async () => {
    await setTimeout(async () => {
      setBool(false);
      console.log(bool);
    }, 1500);
  }, []);
  return (
    <>
      {bool ? (
        <center>
          <img className="pre" src={img} />
        </center>
      ) : (
        <div>
          <Helmet>
            <title>Dashboard | Material Kit</title>
          </Helmet>
          <Box
            sx={{
              backgroundColor: "background.default",
              minHeight: "100%",
              py: 3,
            }}
          >
            <Container maxWidth={false}>
              <Grid container spacing={3}>
                <Grid item lg={4} sm={6} xl={3} xs={12}>
                  <TotalCustomers />
                </Grid>
                <Grid item lg={4} sm={6} xl={3} xs={12}>
                  <TasksProgress />
                </Grid>
                <Grid item lg={4} sm={6} xl={3} xs={12}>
                  <TotalProfit sx={{ height: "100%" }} />
                </Grid>
                <Grid item lg={8} md={12} xl={9} xs={12}>
                  <Sales />
                </Grid>
                <Grid item lg={4} md={6} xl={3} xs={12}>
                  <TrafficByDevice sx={{ height: "100%" }} />
                </Grid>
                <Grid item lg={4} md={6} xl={3} xs={12}>
                  <h1>*</h1>
                </Grid>
              </Grid>
            </Container>
          </Box>{" "}
        </div>
      )}
    </>
  );
};

export default Dashboard;
