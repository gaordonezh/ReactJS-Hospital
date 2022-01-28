import Page from "components/Page";
import { Empty, Spin } from "antd";
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
  Button,
} from "@mui/material";
import CustomizedAccordion from "components/CustomAccordion";
import { ArrowBack, SubdirectoryArrowRight } from "@mui/icons-material";
import { Link } from "react-router-dom";
import useLocation from "hooks/useLocation";

const General = () => {
  const { loading, data } = useLocation();

  return (
    <Page
      helper="CROQUIS"
      title="CROQUIS"
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
                    {building.levels.map((level, ind) => (
                      <CustomizedAccordion
                        title={level.name}
                        initial={true}
                        key={ind}
                      >
                        {level.rooms.map((room, inx) => (
                          <CustomizedAccordion
                            title={room.name}
                            initial={false}
                            key={inx}
                          >
                            <CustomList
                              title="EQUIPOS"
                              items={room.equipments}
                            />
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

export default General;

const CustomList = ({ title, items }) => {
  return (
    <Paper variant="outlined" sx={{ height: 300, overflowX: "auto" }}>
      <List subheader={<ListSubheader>{title}</ListSubheader>}>
        {items.length > 0 ? (
          items.map((row, inxd) => (
            <ListItem key={inxd}>
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
                  description={`No hay ${title} registradas en esta UPSS.`}
                />
              }
            />
          </ListItem>
        )}
      </List>
    </Paper>
  );
};
