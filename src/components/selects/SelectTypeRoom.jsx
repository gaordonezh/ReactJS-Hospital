import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const SelectTypeRoom = ({ value, onChange }) => {
  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel>TIPO</InputLabel>
      <Select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        label="TIPO"
      >
        <MenuItem key={1} value="CIRUGÍA" title="CIRUGÍA">
          CIRUGÍA
        </MenuItem>
        <MenuItem key={2} value="ALMACÉN" title="ALMACÉN">
          ALMACÉN
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectTypeRoom;
