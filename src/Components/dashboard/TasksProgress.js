import react, { useEffect, useHistory, useState } from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  LinearProgress,
  Typography,
} from "@material-ui/core";
import { orange } from "@material-ui/core/colors";
import InsertChartIcon from "@material-ui/icons/InsertChartOutlined";
const TasksProgress = () => {
  const id = localStorage.getItem("id");
  console.log(id);
  const [tot, setTot] = useState(0);
  const [done, setDone] = useState(0);

  useEffect(async () => {
    var total = 0;
    var dos = 0;

    const data = await fetch("http://localhost:3000/mont/get");
    const p = await data.json();

    for (let i = 0; i < p.length; i++) {
      console.log(p[i].state);
      total += 1;
      if (p[i].state === "approuved") dos += 1;
    }

    setTot(total);
    setDone(dos);
  }, []);

  const x = Math.round((done / tot) * 100);
  return (
    <Card sx={{ height: "100%" }}>
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="h6">
              TASKS PROGRESS
            </Typography>
            <Typography color="textPrimary" variant="h3">
              {x}%
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: orange[600],
                height: 56,
                width: 56,
              }}
            >
              <InsertChartIcon />
            </Avatar>
          </Grid>
        </Grid>
        <Box sx={{ pt: 3 }}>
          <LinearProgress value={x} variant="determinate" />
        </Box>
      </CardContent>
    </Card>
  );
};

export default TasksProgress;
