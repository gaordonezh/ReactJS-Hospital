import React, { Fragment, useEffect, useState } from "react";
import TransferList from "../../../components/TransferList";
import { getBedsByRoom, getRooms, putRooms } from "requests";
import SelectGeneral from "../../../components/selects/SelectGeneral";
import { Button } from "@mui/material";
import { notification } from "antd";

const BedToRoom = ({ setLoading }) => {
  const [rooms, setRooms] = useState([]);
  const [room, setRoom] = useState(null);

  const [dataLeft, setDataLeft] = useState([]);
  const [dataRight, setDataRight] = useState([]);

  useEffect(() => {
    obtainData();
  }, []);

  useEffect(() => {
    if (room) {
      obtainVariantData(room);
    }
    setDataLeft([]);
    setDataRight([]);
  }, [room]);

  const obtainVariantData = async (room) => {
    setLoading(true);
    try {
      const { freeItems, containedItems } = await getBedsByRoom(room);
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
      const res = await getRooms();
      setRooms(res);
    } catch (error) {
      notification["error"]({
        message: `Ocurrió un error al obtener la información!`,
      });
    } finally {
      setLoading(false);
    }
  };

  const assignToRoom = async () => {
    try {
      setLoading(true);
      await putRooms({ beds: dataRight }, room);
      notification["success"]({
        message: `Se asignó ${dataRight.length} camas`,
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
        data={rooms}
        value={room}
        onChange={setRoom}
        title="AMBIENTES"
      />
      <TransferList
        dataLeft={dataLeft}
        setDataLeft={setDataLeft}
        dataRight={dataRight}
        setDataRight={setDataRight}
        titleRight="Camas Asignadas"
        titleLeft="Camas Disponibles"
      />
      <div align="center">
        <br />
        <Button
          size="large"
          variant="contained"
          onClick={assignToRoom}
          disabled={!Boolean(room)}
        >
          ASIGNAR
        </Button>
      </div>
    </Fragment>
  );
};

export default BedToRoom;
