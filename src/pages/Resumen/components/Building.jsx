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

const Building = () => {
  const { loading, data } = useLocation();

  return (
    <Page
      helper="EDIFICIOS"
      title="EDIFICIOS"
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
        <Container maxWidth="sm" sx={{ mt: 2 }}>
          <Card>
            <CardContent>
              {data.length > 0 ? (
                <List>
                  {data.map((e, index) => (
                    <ListItem key={index} divider>
                      <ListItemText
                        sx={{ borderLeft: "1px solid #ddd", pl: 1 }}
                        primary={
                          <Stack spacing={1}>
                            <Typography variant="subtitle1">
                              {e.name} {e.description}
                            </Typography>
                            {e.levels.map((l, inx) => (
                              <FormHelperText
                                key={inx}
                                sx={{ fontSize: 13 }}
                                component={Grid}
                                container
                              >
                                <SubdirectoryArrowRight fontSize="small" />
                                {l.name}
                              </FormHelperText>
                            ))}
                          </Stack>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              ) : (
                <div align="center">
                  <Empty description="AQUÍ SE MOSTRARÁN LOS EDIFICIOS REGISTRADOS" />
                </div>
              )}
            </CardContent>
          </Card>
        </Container>
      </Spin>
    </Page>
  );
};

export default Building;
