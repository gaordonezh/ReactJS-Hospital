import React, { Fragment, useEffect, useState } from "react";
import TransferList from "../../../components/TransferList";
import { getLevels, getRoomByLevel, putLevels } from "requests";
import SelectGeneral from "../../../components/selects/SelectGeneral";
import { Button } from "@mui/material";
import { notification } from "antd";

const RoomToLevel = ({ setLoading }) => {
  const [levels, setLevels] = useState([]);
  const [level, setLevel] = useState(null);

  const [dataLeft, setDataLeft] = useState([]);
  const [dataRight, setDataRight] = useState([]);

  useEffect(() => {
    obtainData();
  }, []);

  useEffect(() => {
    if (level) {
      obtainVariantData(level);
    }
    setDataLeft([]);
    setDataRight([]);
  }, [level]);

  const obtainVariantData = async (level) => {
    setLoading(true);
    try {
      const { freeItems, containedItems } = await getRoomByLevel(level);
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
      const res = await getLevels();
      setLevels(res);
    } catch (error) {
      notification["error"]({
        message: `Ocurrió un error al obtener la información!`,
      });
    } finally {
      setLoading(false);
    }
  };

  const assignToLevel = async () => {
    try {
      setLoading(true);
      await putLevels({ rooms: dataRight }, level);
      notification["success"]({
        message: `Se asignó ${dataRight.length} AMBIENTES`,
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
        data={levels}
        value={level}
        onChange={setLevel}
        title="NIVELES"
      />
      <TransferList
        dataLeft={dataLeft}
        setDataLeft={setDataLeft}
        dataRight={dataRight}
        setDataRight={setDataRight}
        titleRight="AMBIENTES Asignadas"
        titleLeft="AMBIENTES Disponibles"
      />
      <div align="center">
        <br />
        <Button
          size="large"
          variant="contained"
          onClick={assignToLevel}
          disabled={!Boolean(level)}
        >
          ASIGNAR
        </Button>
      </div>
    </Fragment>
  );
};

export default RoomToLevel;
