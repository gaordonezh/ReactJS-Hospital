import React, { useState, useEffect } from "react";
import { Card, CardContent, Grid } from "@mui/material";
import Day from "./Day";
import QuotesList from "./QuotesList";
import { Spin, notification } from "antd";
import { getDashboard } from "requests";

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    obtainData();
  }, []);

  const obtainData = async () => {
    setLoading(true);
    try {
      const res = await getDashboard();
      setData({ ...res, list: [...res.list.reverse()] });
    } catch (error) {
      notification["error"]({
        message: `Oops!`,
        description: `Ocurrió un error al obtener la información.`,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Spin spinning={loading}>
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item lg={4} md={6} sm={6} xs={12}>
                <Day
                  top={3}
                  h="h2"
                  title="Total Citas"
                  value={data ? data.quotes : 0}
                />
              </Grid>
              <Grid item lg={4} md={6} sm={6} xs={12}>
                <Grid container spacing={1}>
                  <Grid item sm={6} xs={12} md={6} lg={12}>
                    <Day
                      top={1}
                      h="h4"
                      title="Pacientes"
                      value={data ? data.patients : 0}
                    />
                  </Grid>
                  <Grid item sm={6} xs={12} md={6} lg={12}>
                    <Day
                      top={1}
                      h="h4"
                      title="Servicios generales"
                      value={data ? data.services : 0}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item lg={4} md={12} sm={12} xs={12}>
                <Grid container spacing={1}>
                  <Grid item sm={6} xs={12} md={6} lg={12}>
                    <Day
                      top={1}
                      h="h4"
                      title="Logística"
                      value={data ? data.logistica : 0}
                    />
                  </Grid>
                  <Grid item sm={6} xs={12} md={6} lg={12}>
                    <Day
                      top={1}
                      h="h4"
                      title="Personal Médico"
                      value={data ? data.medicos : 0}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <QuotesList data={data ? data.list.reverse() : []} />
          </Grid>
        </Grid>
      </CardContent>
    </Spin>
  );
};

export default Dashboard;
