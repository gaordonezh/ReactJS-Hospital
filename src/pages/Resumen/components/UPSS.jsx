import React, { useEffect, useState } from "react";
import Page from "components/Page";
import {
  Button,
  Card,
  CardContent,
  Container,
  FormHelperText,
  Grid,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { ArrowBack, SubdirectoryArrowRight } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Empty, notification, Spin } from "antd";
import { getUpss } from "requests";

const UPSS = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    obtainData();
  }, []);

  const obtainData = async () => {
    try {
      setLoading(true);
      const res = await getUpss();
      setData([...res]);
    } catch (error) {
      notification["error"]({
        message: `Ocurrió un error al realizar la operación.`,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Page
      helper="UPSS"
      title="UPSS"
      itemComponent={
        <Button
          variant="outlined"
          size="large"
          LinkComponent={Link}
          to="/resume"
        >
          <ArrowBack /> VOLVER
        </Button>
      }
    >
      <Spin spinning={loading}>
        <Container maxWidth="md" sx={{ mt: 2 }}>
          <Card>
            <CardContent>
              <Grid container spacing={2}>
                {data.length > 0 ? (
                  data.map((l, index) => (
                    <Grid item xs={12} md={6} key={index}>
                      <List>
                        <ListItem divider>
                          <ListItemText
                            primary={
                              <Stack spacing={1}>
                                <Typography variant="subtitle1">
                                  <b>
                                    {l.name} {l.description}
                                  </b>
                                </Typography>
                                {l.rooms.map((r, inx) => (
                                  <Typography
                                    key={inx}
                                    sx={{ fontSize: 13 }}
                                    component={Grid}
                                    container
                                  >
                                    <SubdirectoryArrowRight fontSize="small" />
                                    {r.name} {r.description}
                                    {r.equipments.map((e) => (
                                      <Grid item xs={12}>
                                        <FormHelperText
                                          sx={{ pl: 2 }}
                                          component={Grid}
                                          container
                                        >
                                          <SubdirectoryArrowRight fontSize="small" />{" "}
                                          {e.name}
                                        </FormHelperText>
                                      </Grid>
                                    ))}
                                  </Typography>
                                ))}
                              </Stack>
                            }
                          />
                        </ListItem>
                      </List>
                    </Grid>
                  ))
                ) : (
                  <Grid item xs={12} align="center">
                    <Empty description="AQUÍ SE MOSTRARÁN LOS UPSS REGISTRADOS" />
                  </Grid>
                )}
              </Grid>
            </CardContent>
          </Card>
        </Container>
      </Spin>
    </Page>
  );
};

export default UPSS;
