import React, { Fragment, useEffect, useState } from "react";
import { Button } from "@mui/material";
import Page from "components/Page";
import { notification } from "antd";
import { getAttentions } from "requests";
import TableAttentions from "./TableAttentions";
import ModalAttentions from "./ModalAttentions";
import ModalAttentionDetail from "./ModalAttentionDetail";
import ModalRecipe from "./ModalRecipe";

const Equipment = ({ data: hisData, setView }) => {
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [data, setData] = useState([]);
  const [details, setDetails] = useState({ open: false, data: null });
  const [recipe, setRecipe] = useState({ open: false, data: null });

  useEffect(() => {
    obtainData();
  }, []);

  const obtainData = async () => {
    setLoading(true);
    try {
      const res = await getAttentions(hisData._id);
      setData(res.reverse());
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
      helper="HISTORIAS CLÍNICAS » ATENCIONES"
      title={`${hisData.patient.f_name} ${hisData.patient.l_name}`}
      itemComponent={
        <Fragment>
          <Button
            variant="outlined"
            size="large"
            onClick={() => setView({ open: false })}
          >
            VOLVER
          </Button>{" "}
          <Button
            variant="contained"
            size="large"
            onClick={() => setModal(true)}
          >
            AGREGAR ATENCIÓN
          </Button>
        </Fragment>
      }
    >
      <TableAttentions
        loading={loading}
        data={data}
        setDetails={setDetails}
        setRecipe={setRecipe}
        setLoading={setLoading}
      />

      {modal && (
        <ModalAttentions
          open={modal}
          setOpen={setModal}
          loading={loading}
          setLoading={setLoading}
          reloadFunction={obtainData}
          attention={hisData}
        />
      )}

      {details.open && (
        <ModalAttentionDetail
          open={details.open}
          setOpen={setDetails}
          data={details.data}
          loading={loading}
          setLoading={setLoading}
          reloadFunction={obtainData}
        />
      )}

      {recipe.open && (
        <ModalRecipe
          open={recipe.open}
          setOpen={setRecipe}
          data={recipe.data}
          loading={loading}
          setLoading={setLoading}
          reloadFunction={obtainData}
        />
      )}
    </Page>
  );
};

export default Equipment;
