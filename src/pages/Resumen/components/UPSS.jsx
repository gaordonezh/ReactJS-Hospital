import React from "react";
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
import useLocation from "hooks/useLocation";
import { Empty, Spin } from "antd";

const UPSS = () => {
  const { data, loading } = useLocation();

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
        <Container maxWidth="lg" sx={{ mt: 2 }}>
          <Card>
            <CardContent>
              <Grid container spacing={2}>
                {data.length > 0 ? (
                  data.map((e, index) =>
                    e.levels.map((l, inx) =>
                      l.rooms.map((r, indx) => (
                        <Grid
                          item
                          xs={12}
                          md={6}
                          xl={4}
                          key={index + inx + indx}
                          sx={{
                            borderBottom: "1px solid #eee",
                            borderLeft: "1px solid #eee",
                            borderRight: "1px solid #eee",
                          }}
                        >
                          <List>
                            <ListItem>
                              <ListItemText
                                primary={
                                  <Stack spacing={1}>
                                    <Typography variant="subtitle1">
                                      {r.name} {r.description}
                                    </Typography>
                                    {r.equipments.length > 0 ? (
                                      r.equipments.map((eq, idx) => (
                                        <FormHelperText
                                          key={idx}
                                          sx={{ fontSize: 13 }}
                                          component={Grid}
                                          container
                                        >
                                          <SubdirectoryArrowRight fontSize="small" />
                                          {eq.name}
                                        </FormHelperText>
                                      ))
                                    ) : (
                                      <Empty description="No hay equipos registrados en esta UPSS" />
                                    )}
                                  </Stack>
                                }
                              />
                            </ListItem>
                          </List>
                        </Grid>
                      ))
                    )
                  )
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
