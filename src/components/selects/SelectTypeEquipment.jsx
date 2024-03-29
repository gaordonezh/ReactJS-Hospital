import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

export const listTypes = [
  "EQUIPOS BIOMÉDICOS",
  "MOBILIARIOS CLÍNICOS",
  "MOBILIARIOS ADMINISTRATIVOS",
  "EQUIPOS COMPLEMENTARIOS",
  "EQUIPOS ELECTROMECÁNICOS",
  "EQUIPOS DE SERVICIOS GENERALES",
  "VEHÍCULOS",
];

const SelectTypeEquipment = ({ value, onChange }) => {
  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel>TIPO DE EQUIPO</InputLabel>
      <Select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        label="TIPO DE EQUIPO"
      >
        {listTypes.map((el, index) => (
          <MenuItem key={index} value={el} title={el}>
            {el}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectTypeEquipment;
