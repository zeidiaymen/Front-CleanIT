import React, { useEffect, useState } from "react";
import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography,
  Box,
  LinearProgress,
} from "@material-ui/core";
import { indigo } from "@material-ui/core/colors";
import InsertChartIcon from "@material-ui/icons/InsertChartOutlined";

const TotalProfit = () => {
  const [tot, setTot] = useState(0);
  const [dn, setDn] = useState(0);
  useEffect(async () => {
    const data = await fetch("http://localhost:3000/claim/get");
    const p = await data.json();
    console.log(p);
    var totale = 0;
    var done = 0;
    for (let i = 0; i < p.length; i++) {
      totale += 1;
      if (p[i].status === "treated") done += 1;
    }
    setTot(totale);
    setDn(done);
  }, []);
  const dat = Math.round((dn / tot) * 100);
  return (
    <Card className="container">
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="h6">
              CLAIMS PROGRESS
            </Typography>
            <Typography color="textPrimary" variant="h3">
              {dat} %
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: indigo[600],
                height: 56,
                width: 56,
              }}
            >
              <InsertChartIcon />{" "}
            </Avatar>
          </Grid>
        </Grid>
        <Box sx={{ pt: 3 }}>
          <LinearProgress value={dat} variant="determinate" />
        </Box>
      </CardContent>
    </Card>
  );
};

export default TotalProfit;
