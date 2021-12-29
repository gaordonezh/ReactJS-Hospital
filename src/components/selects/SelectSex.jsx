import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const SelectSex = ({ sex, setSex }) => {
  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel>SEXO</InputLabel>
      <Select value={sex} onChange={(e) => setSex(e.target.value)} label="SEXO">
        <MenuItem key={1} value="MASCULINO" title="MASCULINO">
          MASCULINO
        </MenuItem>
        <MenuItem key={2} value="FEMENINO" title="FEMENINO">
          FEMENINO
        </MenuItem>
        <MenuItem key={3} value="OTRO" title="OTRO">
          OTRO
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectSex;
