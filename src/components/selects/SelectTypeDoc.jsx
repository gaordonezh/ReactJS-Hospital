import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const SelectTypeDoc = ({ typeDoc, setTypeDoc }) => {
  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel>TIPO DE DOCUMENTO</InputLabel>
      <Select
        value={typeDoc}
        onChange={(e) => setTypeDoc(e.target.value)}
        label="TIPO DE DOCUMENTO"
      >
        <MenuItem value="DNI">DNI</MenuItem>
        <MenuItem value="RUC">RUC</MenuItem>
        <MenuItem value="PASAPORTE">PASAPORTE</MenuItem>
        <MenuItem value="CARNÉ DE EXTRANJERÍA">CARNÉ DE EXTRANJERÍA</MenuItem>
        <MenuItem value="PERMISO TEMPORAL DE PERMANENCIA">
          PERMISO TEMPORAL DE PERMANENCIA (PTP)
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectTypeDoc;
