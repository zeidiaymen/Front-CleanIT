import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  useTheme,
  colors,
} from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const Sales = () => {
  const [aug, setLundi] = useState(0);
  const [sept, setMardi] = useState(0);
  const [oct, setMerc] = useState(0);
  const [nov, setJeudi] = useState(0);

  useEffect(async () => {
    const data = await fetch("https://appcleanit.herokuapp.com/serv/get");
    const p = await data.json();
    var a = 0;
    var b = 0;
    var c = 0;
    var d = 0;

    for (let i = 0; i < p.length; i++) {
      var j = new Date(p[i].date);

      if (j.getMonth() == 7) {
        a += 1;
      }
      if (j.getMonth() == 8) {
        b += 1;
      }
      if (j.getMonth() == 9) {
        c += 1;
      }
      if (j.getMonth() == 10) {
        d += 1;
      }
    }
    setLundi(a);
    setMardi(b);
    setMerc(c);
    setJeudi(d);
  }, []);

  const theme = useTheme();
  const e = 10;
  const data = {
    datasets: [
      {
        backgroundColor: colors.indigo[500],
        data: [aug, sept, oct, nov],
        label: "This month",
      },
    ],
    labels: [" Aug", " Sept", " Oct", " Nov"],
  };

  const options = {
    animation: false,
    cornerRadius: 20,
    layout: { padding: 0 },
    legend: { display: false },
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      xAxes: [
        {
          barThickness: 12,
          maxBarThickness: 10,
          barPercentage: 0.5,
          categoryPercentage: 0.5,
          ticks: {
            fontColor: theme.palette.text.secondary,
          },
          gridLines: {
            display: false,
            drawBorder: false,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            fontColor: theme.palette.text.secondary,
            beginAtZero: true,
            min: 0,
          },
          gridLines: {
            borderDash: [2],
            borderDashOffset: [2],
            color: theme.palette.divider,
            drawBorder: false,
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2],
            zeroLineColor: theme.palette.divider,
          },
        },
      ],
    },
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: "index",
      titleFontColor: theme.palette.text.primary,
    },
  };

  return (
    <Card className="container">
      <CardHeader
        action={
          <Button endIcon={<ArrowDropDownIcon />} size="small" variant="text">
            Last 4 months
          </Button>
        }
        title="Latest Sales"
      />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 400,
            position: "relative",
          }}
        >
          <Bar data={data} options={options} />
        </Box>
      </CardContent>
      <Divider />
    </Card>
  );
};

export default Sales;
