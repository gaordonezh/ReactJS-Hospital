import React, { Fragment, useState, useEffect } from "react";
import Page from "components/Page";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { getDays, getSchedules, getUsers } from "requests";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import TocIcon from "@mui/icons-material/Toc";
import RegisterSchedules from "./RegisterSchedules";
import UserSchedules from "./UserSchedules";
import { Spin, notification } from "antd";

const Patients = () => {
  const [tab, setTab] = useState(0);
  const [loading, setLoading] = useState(false);
  const [horarios, setHorarios] = useState([]);
  const [schedules, setSchedules] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    obtainData();
  }, []);

  const obtainData = async (s = true, u = true, d = true) => {
    setLoading(true);
    try {
      if (s) {
        const res = await getSchedules();
        setHorarios(res);
      }
      if (u) {
        const resUsers = await getUsers();
        setUsers(resUsers);
      }
      if (d) {
        const resSchedule = await getDays();
        setSchedules(resSchedule);
      }
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
    <Page helper="PERSONAL" title="HORARIOS LABORALES">
      <Spin spinning={loading}>
        <Fragment>
          <Tabs
            value={tab}
            onChange={(a, b) => setTab(b)}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab icon={<TocIcon />} label="LISTADO" {...a11yProps(0)} />
            <Tab
              icon={<AppRegistrationIcon />}
              label="REGISTRO"
              {...a11yProps(1)}
            />
          </Tabs>
          <TabPanel value={tab} index={0}>
            <UserSchedules
              horarios={horarios}
              users={users}
              setLoading={setLoading}
              refresh={obtainData}
              loading={loading}
              schedules={schedules}
            />
          </TabPanel>
          <TabPanel value={tab} index={1}>
            <RegisterSchedules
              setLoading={setLoading}
              data={horarios}
              refresh={obtainData}
            />
          </TabPanel>
        </Fragment>
      </Spin>
    </Page>
  );
};

export default Patients;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      style={{ borderTop: "1px solid #1976d2" }}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}
