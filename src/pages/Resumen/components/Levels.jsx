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

const Levels = () => {
  const { data, loading } = useLocation();

  return (
    <Page
      helper="NIVELES"
      title="NIVELES"
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
                  data.map((e, index) =>
                    e.levels.map((l, inx) => (
                      <Grid item xs={12} md={6} key={index + inx}>
                        <List>
                          <ListItem divider>
                            <ListItemText
                              primary={
                                <Stack spacing={1}>
                                  <Typography variant="subtitle1">
                                    {l.name} {l.description}
                                  </Typography>
                                  {l.rooms.map((r, inx) => (
                                    <FormHelperText
                                      key={inx}
                                      sx={{ fontSize: 13 }}
                                      component={Grid}
                                      container
                                    >
                                      <SubdirectoryArrowRight fontSize="small" />
                                      {r.name} {r.description}
                                    </FormHelperText>
                                  ))}
                                </Stack>
                              }
                            />
                          </ListItem>
                        </List>
                      </Grid>
                    ))
                  )
                ) : (
                  <Grid item xs={12} align="center">
                    <Empty description="AQUÍ SE MOSTRARÁN LOS NIVELES REGISTRADOS" />
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

export default Levels;
