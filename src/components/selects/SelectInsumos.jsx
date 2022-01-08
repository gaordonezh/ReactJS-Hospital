import React from "react";
import { Select } from "antd";
import { FormHelperText } from "@mui/material";

const { Option } = Select;

const SelectInsumos = ({ data = [], value, setValue }) => {
  const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  const filterOptions = (inputValue, option) => {
    const title = removeAccents(option.props.title.toLowerCase());
    return title.includes(inputValue.toLowerCase());
  };

  return (
    <Select
      size="large"
      style={{ width: "100%" }}
      showSearch
      value={value}
      onChange={setValue}
      filterOption={filterOptions}
    >
      <Option key={null} value={null} title={""}>
        -- Ninguno --
      </Option>
      {data.map((el, index) => (
        <Option
          key={index}
          value={el._id}
          title={`${el.name} ${el.description} ${el.stock}`}
        >
          {el.name}
          {" » "}
          <FormHelperText component="span">
            {el.description} ─ stock {el.stock}
          </FormHelperText>
        </Option>
      ))}
    </Select>
  );
};

export default SelectInsumos;
