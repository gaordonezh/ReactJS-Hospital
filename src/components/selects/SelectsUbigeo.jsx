import React, { Fragment } from "react";
import { Select } from "antd";
import { FormHelperText, Grid, TextField } from "@mui/material";
import departamentos from "../../utils/departamentos";
import provincias from "../../utils/provincias";
import distritos from "../../utils/distritos";

const { Option } = Select;

const SelectsUbigeo = ({ setUbigeo, ubigeo }) => {
  const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  const filterOptions = (inputValue, option) => {
    const title = removeAccents(option.props.title.toLowerCase());
    return title.includes(inputValue.toLowerCase());
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <FormHelperText>DEPARTAMENTO</FormHelperText>
        <Select
          size="large"
          style={{ width: "100%" }}
          showSearch
          value={ubigeo.departamento}
          onChange={(e) => {
            setUbigeo({ provincia: null, distrito: null, departamento: e });
          }}
          filterOption={filterOptions}
        >
          <Option key={null} value={null} title={""}>
            -- Ninguno --
          </Option>
          {departamentos.map((i) => (
            <Option key={i.id} value={i.id} title={i.name.toUpperCase()}>
              {i.name.toUpperCase()}
            </Option>
          ))}
        </Select>
      </Grid>
      <Grid item xs={12} sm={4}>
        <FormHelperText>PROVINCIA</FormHelperText>
        <Select
          size="large"
          style={{ width: "100%" }}
          showSearch
          value={ubigeo.provincia}
          onChange={(e) => {
            setUbigeo({ ...ubigeo, provincia: e, distrito: null });
          }}
          filterOption={filterOptions}
          disabled={!Boolean(ubigeo.departamento)}
        >
          <Option key={null} value={null} title={""}>
            -- Ninguno --
          </Option>
          {ubigeo.departamento && (
            <Fragment>
              {provincias
                .filter((el) => el.department_id === ubigeo.departamento)
                .map((i) => (
                  <Option key={i.id} value={i.id} title={i.name.toUpperCase()}>
                    {i.name.toUpperCase()}
                  </Option>
                ))}
            </Fragment>
          )}
        </Select>
      </Grid>
      <Grid item xs={12} sm={4}>
        <FormHelperText>DISTRITO</FormHelperText>
        <Select
          size="large"
          style={{ width: "100%" }}
          showSearch
          value={ubigeo.distrito}
          onChange={(e) => setUbigeo({ ...ubigeo, distrito: e })}
          filterOption={filterOptions}
          disabled={!Boolean(ubigeo.provincia)}
        >
          <Option key={null} value={null} title={""}>
            -- Ninguno --
          </Option>
          {ubigeo.provincia && (
            <Fragment>
              {distritos
                .filter((el) => el.province_id === ubigeo.provincia)
                .map((i) => (
                  <Option key={i.id} value={i.id} title={i.name.toUpperCase()}>
                    {i.name.toUpperCase()}
                  </Option>
                ))}
            </Fragment>
          )}
        </Select>
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="DIRECCIÓN"
          value={ubigeo.direccion}
          onChange={(e) => {
            setUbigeo({ ...ubigeo, direccion: e.target.value });
          }}
        />
      </Grid>
    </Grid>
  );
};

export default SelectsUbigeo;
