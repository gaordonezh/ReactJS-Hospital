import React, { useState } from "react";
import Page from "components/Page";
import LevelToBuilding from "./components/LevelToBuilding";
import RoomToLevel from "./components/RoomToLevel";
import RoomToUpss from "./components/RoomToUpss";
import { Spin } from "antd";
// import BedToRoom from "./components/BedToRoom";
import EquipmentToRoom from "./components/EquipmentToRoom";
import CustomizedAccordion from "../../components/CustomAccordion";

const Assignment = () => {
  const [loading, setLoading] = useState(false);
  return (
    <Page helper="CONFIGURACIÓN" title="ASIGNACIÓN">
      <br />
      <CustomizedAccordion title="ASIGNAR NIVELES A EDIFICIOS">
        <Spin spinning={loading}>
          <LevelToBuilding setLoading={setLoading} />
        </Spin>
      </CustomizedAccordion>
      <CustomizedAccordion title="ASIGNAR AMBIENTES A NIVELES">
        <Spin spinning={loading}>
          <RoomToLevel setLoading={setLoading} />
        </Spin>
      </CustomizedAccordion>
      <CustomizedAccordion title="ASIGNAR AMBIENTES A UPSS">
        <Spin spinning={loading}>
          <RoomToUpss setLoading={setLoading} />
        </Spin>
      </CustomizedAccordion>
      {/* <CustomizedAccordion title="ASIGNAR CAMAS A AMBIENTES">
        <Spin spinning={loading}>
          <BedToRoom setLoading={setLoading} />
        </Spin>
      </CustomizedAccordion> */}
      <CustomizedAccordion title="ASIGNAR EQUIPOS A AMBIENTES">
        <Spin spinning={loading}>
          <EquipmentToRoom setLoading={setLoading} />
        </Spin>
      </CustomizedAccordion>
    </Page>
  );
};

export default Assignment;
