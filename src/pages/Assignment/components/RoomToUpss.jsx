import React, { Fragment, useEffect, useState } from "react";
import TransferList from "../../../components/TransferList";
import { getUpss, putUpss, getUpssByCompany } from "requests";
import SelectGeneral from "../../../components/selects/SelectGeneral";
import { Button } from "@mui/material";
import { notification } from "antd";

const RoomToUpss = ({ setLoading }) => {
  const [upss, setUpss] = useState([]);
  const [ups, setUps] = useState(null);

  const [dataLeft, setDataLeft] = useState([]);
  const [dataRight, setDataRight] = useState([]);

  useEffect(() => {
    obtainData();
  }, []);

  useEffect(() => {
    if (ups) {
      obtainVariantData(ups);
    }
    setDataLeft([]);
    setDataRight([]);
  }, [ups]);

  const obtainVariantData = async (ups) => {
    setLoading(true);
    try {
      const { freeItems, containedItems } = await getUpssByCompany(ups);
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
      const res = await getUpss();
      setUpss(res);
    } catch (error) {
      notification["error"]({
        message: `Ocurrió un error al obtener la información!`,
      });
    } finally {
      setLoading(false);
    }
  };

  const assignToUpss = async () => {
    try {
      setLoading(true);
      await putUpss({ rooms: dataRight }, ups);
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
      <SelectGeneral data={upss} value={ups} onChange={setUps} title="UPSS" />
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
          onClick={assignToUpss}
          disabled={!Boolean(ups)}
        >
          ASIGNAR
        </Button>
      </div>
    </Fragment>
  );
};

export default RoomToUpss;
