import React, { Fragment, useEffect, useState } from "react";
import TransferList from "../../../components/TransferList";
import {
  getBuildings,
  getLevelsByBuilding,
  putBuildings,
} from "requests";
import SelectGeneral from "../../../components/selects/SelectGeneral";
import { Button } from "@mui/material";
import { notification } from "antd";

const LevelToBuilding = ({ setLoading }) => {
  const [buildings, setBuildings] = useState([]);
  const [building, setBuilding] = useState(null);

  const [dataLeft, setDataLeft] = useState([]);
  const [dataRight, setDataRight] = useState([]);

  useEffect(() => {
    obtainData();
  }, []);

  useEffect(() => {
    if (building) {
      obtainVariantData(building);
    }
    setDataLeft([]);
    setDataRight([]);
  }, [building]);

  const obtainVariantData = async (building) => {
    setLoading(true);
    try {
      const { freeItems, containedItems } = await getLevelsByBuilding(building);
      setDataLeft([...freeItems]);
      setDataRight([...containedItems]);
    } catch (error) {
      notification["error"]({
        message: `Oops!`,
        description: `Ocurrió un error al obtener la información.`,
      });
    } finally {
      setLoading(false);
    }
  };

  const obtainData = async () => {
    setLoading(true);
    try {
      const res = await getBuildings();
      setBuildings(res);
    } catch (error) {
      notification["error"]({
        message: `Ocurrió un error al obtener la información!`,
      });
    } finally {
      setLoading(false);
    }
  };

  const assignToBuilding = async () => {
    try {
      setLoading(true);
      await putBuildings({ levels: dataRight }, building);
      notification["success"]({
        message: `Se asignó ${dataRight.length} niveles`,
        description: `La asignación se realizó exitosamente.`,
      });
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
    <Fragment>
      <SelectGeneral
        data={buildings}
        value={building}
        onChange={setBuilding}
        title="EDIFICIOS"
      />
      <TransferList
        dataLeft={dataLeft}
        setDataLeft={setDataLeft}
        dataRight={dataRight}
        setDataRight={setDataRight}
        titleRight="Niveles Asignados"
        titleLeft="Niveles Disponibles"
      />
      <div align="center">
        <br />
        <Button
          size="large"
          variant="contained"
          onClick={assignToBuilding}
          disabled={!Boolean(building)}
        >
          ASIGNAR
        </Button>
      </div>
    </Fragment>
  );
};

export default LevelToBuilding;
