import React, { useEffect, useState } from "react";
import Page from "components/Page";
import { getMap } from "requests";
import { Empty, notification, Spin } from "antd";
import {
  Grid,
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemIcon,
} from "@mui/material";
import CustomizedAccordion from "components/CustomAccordion";
import { SubdirectoryArrowRight } from "@mui/icons-material";

const Map = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    obtainData();
  }, []);

  const obtainData = async () => {
    setLoading(true);
    try {
      const res = await getMap();
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
    <Page helper="CROQUIS" title="CROQUIS">
      <Spin spinning={loading}>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          {data.length > 0 ? (
            data.map((building, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card variant="outlined">
                  <CardHeader
                    avatar={<Avatar>{building.name.charAt(0)}</Avatar>}
                    title={building.name}
                    subheader={building.description}
                  />
                  <CardContent>
                    {building.levels.map((level) => (
                      <CustomizedAccordion title={level.name} initial={true}>
                        {level.rooms.map((room) => (
                          <CustomizedAccordion
                            title={room.name}
                            initial={false}
                          >
                            <Grid container spacing={1}>
                              <Grid item xs={12} xl={6}>
                                <CustomList title="CAMAS" items={room.beds} />
                              </Grid>
                              <Grid item xs={12} xl={6}>
                                <CustomList
                                  title="EQUIPOS"
                                  items={room.equipments}
                                />
                              </Grid>
                            </Grid>
                          </CustomizedAccordion>
                        ))}
                      </CustomizedAccordion>
                    ))}
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <Empty description="AQUÍ SE MOSTRARÁ LAS UBICACIONES CONTENIDAS." />
            </Grid>
          )}
        </Grid>
      </Spin>
    </Page>
  );
};

export default Map;

const CustomList = ({ title, items }) => {
  return (
    <Paper variant="outlined">
      <List subheader={<ListSubheader>{title}</ListSubheader>}>
        {items.length > 0 ? (
          items.map((row) => (
            <ListItem>
              <ListItemIcon>
                <SubdirectoryArrowRight color="primary" fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary={row.name}
                secondary={row.type?.toLowerCase() ?? null}
              />
            </ListItem>
          ))
        ) : (
          <ListItem>
            <ListItemText
              primary={
                <Empty
                  description={`No hay ${title} registradas en esta habitación.`}
                />
              }
            />
          </ListItem>
        )}
      </List>
    </Paper>
  );
};
