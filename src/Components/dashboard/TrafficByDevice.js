import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  colors,
  useTheme,
} from "@material-ui/core";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import PhoneIcon from "@material-ui/icons/Phone";
import TabletIcon from "@material-ui/icons/Tablet";

const TrafficByDevice = () => {
  const theme = useTheme();
  const [mob, setMob] = useState(0);
  const [des, setDes] = useState(0);
  const [tot, setTot] = useState(0);

  const [tab, setTab] = useState(0);
  useEffect(async () => {
    var mobile = 0;
    var desktop = 0;
    var tablet = 0;
    var totale = 0;
    const data = await fetch("https://appcleanit.herokuapp.com/device/get");
    const p = await data.json();
    for (let i = 0; i < p.length; i++) {
      totale += 1;
      if (p[i].nbMobile == 1) {
        mobile += 1;
      }
      if (p[i].nbDesktop == 1) {
        desktop += 1;
      }
      if (p[i].nbTablette) {
        tablet += 1;
      }
    }
    setTot(totale);
    setMob(mobile);
    setDes(desktop);
    setTab(tablet);
  });
  const mb = Math.round((mob / tot) * 100);
  const ds = Math.round((des / tot) * 100);

  const tb = Math.round((tab / tot) * 100);

  const data = {
    datasets: [
      {
        data: [ds, mb, tb],
        backgroundColor: [
          colors.indigo[500],
          colors.red[600],
          colors.orange[600],
        ],
        borderWidth: 8,
        borderColor: colors.common.white,
        hoverBorderColor: colors.common.white,
      },
    ],
    labels: ["Desktop", "Tablet", "Mobile"],
  };

  const options = {
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false,
    },
    maintainAspectRatio: false,
    responsive: true,
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

  const devices = [
    {
      title: "Desktop",
      value: ds,
      icon: LaptopMacIcon,
      color: colors.indigo[500],
    },
    {
      title: "Tablet",
      value: tb,
      icon: TabletIcon,
      color: colors.red[600],
    },
    {
      title: "Mobile",
      value: mb,
      icon: PhoneIcon,
      color: colors.orange[600],
    },
  ];

  return (
    <Card className="container">
      <CardHeader title="Traffic by Device" />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 300,
            position: "relative",
          }}
        >
          <Doughnut data={data} options={options} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pt: 2,
          }}
        >
          {devices.map(({ color, icon: Icon, title, value }) => (
            <Box
              key={title}
              sx={{
                p: 1,
                textAlign: "center",
              }}
            >
              <Icon color="action" />
              <Typography color="textPrimary" variant="body1">
                {title}
              </Typography>
              <Typography style={{ color }} variant="h2">
                {value}%
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default TrafficByDevice;
