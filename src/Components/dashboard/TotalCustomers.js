import React, { useState, useEffect } from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import PeopleIcon from "@material-ui/icons/PeopleOutlined";

const TotalCustomers = () => {
  const [tot, setTot] = useState(0);
  useEffect(async () => {
    var totale = 0;
    const data = await fetch("http://localhost:3000/user/all");
    const p = await data.json();

    for (let i = 1; p.length > i; i++) {
      if (p[i].role == "user") totale += 1;
    }
    setTot(totale);
  }, []);

  return (
    <Card>
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="h6">
              TOTAL CUSTOMERS
            </Typography>
            <Typography color="textPrimary" variant="h3">
              {tot}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: green[600],
                height: 56,
                width: 56,
              }}
            >
              <PeopleIcon />
            </Avatar>
          </Grid>
        </Grid>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            pt: 2,
          }}
        ></Box>
      </CardContent>
    </Card>
  );
};
export default TotalCustomers;
