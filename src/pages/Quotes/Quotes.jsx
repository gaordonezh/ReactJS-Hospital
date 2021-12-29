import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import Page from "components/Page";
import ModalQuotes from "./components/ModalQuotes";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import { notification, Spin } from "antd";
import { getQuotes } from "requests";
import ModalDetails from "./components/ModalDetails";
import esLocale from "@fullcalendar/core/locales/es";

const types = {
  PENDIENTE: "#c79c00",
  PROCESO: "#0095c7",
  FINALIZADO: "#53c700",
  AUSENTE: "#53c700",
  CANCELADO: "#b30018",
};

const Quotes = () => {
  const [modalQuote, setModalQuote] = useState({ open: false, data: null });
  const [details, setDetails] = useState({ open: false, data: null });
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const handleEventClick = (info) => {
    const selected = data.find(
      (event) => event._id === info.event._def.extendedProps._id
    );
    setDetails({ open: true, data: selected });
  };

  useEffect(() => {
    obtainData();
  }, []);

  const obtainData = async () => {
    setLoading(true);
    try {
      const res = await getQuotes();
      let refactor = res.map((el) => ({
        ...el,
        title: `${el.patient.f_name} ${el.patient.l_name}`,
        color: types[el.status],
      }));
      setData(refactor);
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
    <Page
      helper="CITAS"
      title="CITAS"
      itemComponent={
        <Button
          variant="contained"
          size="large"
          onClick={() => setModalQuote({ open: true })}
        >
          AGREGAR
        </Button>
      }
    >
      <br />
      <Spin spinning={loading}>
        <FullCalendar
          locale={esLocale}
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={data}
          eventClick={handleEventClick}
          droppable={false}
          editable={false}
        />
      </Spin>
      <br />
      {modalQuote.open && (
        <ModalQuotes
          open={modalQuote.open}
          setOpen={setModalQuote}
          loading={loading}
          setLoading={setLoading}
          data={modalQuote.data}
          reloadFunction={obtainData}
        />
      )}
      {details.open && (
        <ModalDetails
          open={details.open}
          setOpen={setDetails}
          data={details.data}
          setModalQuote={setModalQuote}
        />
      )}
    </Page>
  );
};

export default Quotes;
