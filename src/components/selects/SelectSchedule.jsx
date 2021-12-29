import React, { Fragment } from "react";
import { Select } from "antd";
import { FormHelperText } from "@mui/material";

const { Option } = Select;

const SelectSchedule = ({ data = [], value, onChange }) => {
  const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  const filterOptions = (inputValue, option) => {
    const title = removeAccents(option.props.title.toLowerCase());
    return title.includes(inputValue.toLowerCase());
  };

  return (
    <Fragment>
      <FormHelperText>HORARIOS</FormHelperText>
      <Select
        size="large"
        style={{ width: "100%" }}
        showSearch
        value={value}
        onChange={onChange}
        filterOption={filterOptions}
      >
        <Option key={null} value={null} title={""}>
          -- Ninguno --
        </Option>
        {data.map((el, index) => (
          <Option key={index} value={el._id} title={`${el.start} - ${el.end}`}>
            <b>{el.start}</b>
            {" -- a -- "}
            <b>{el.end}</b>
          </Option>
        ))}
      </Select>
    </Fragment>
  );
};

export default SelectSchedule;
