import React, { useState, useEffect } from "react";
import { Table } from "antd";
import PageviewIcon from "@mui/icons-material/Pageview";
import SearchIcon from "@mui/icons-material/Search";
import { Button, TextField } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

const CustomTable = ({ data, columns, loading, ...rest }) => {
  const [searchText, setsearchText] = useState("");
  const [searchedColumn, setsearchedColumn] = useState("");
  const [allColumns, setAllColumns] = useState([]);

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <TextField
          variant="outlined"
          placeholder="Buscar..."
          size="small"
          value={selectedKeys[0]}
          onChange={(e) => {
            setSelectedKeys(e.target.value ? [e.target.value] : []);
          }}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Button
          color="primary"
          variant="outlined"
          size="small"
          onClick={() =>
            handleReset(clearFilters, selectedKeys, setSelectedKeys)
          }
          style={{ width: 90 }}
        >
          Limpiar <ClearIcon />
        </Button>{" "}
        <Button
          color="primary"
          size="small"
          variant="contained"
          onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
        >
          Buscar <SearchIcon />
        </Button>
      </div>
    ),
    filterIcon: (filtered) => (
      <PageviewIcon style={{ color: filtered ? "#fff" : "#aaa" }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
      }
    },
    render: (text) => (searchedColumn === dataIndex ? searchText : text),
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setsearchText(selectedKeys[0]);
    setsearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters, selectedKeys, setSelectedKeys) => {
    clearFilters();
    setsearchText("");
    setSelectedKeys([""]);
  };

  useEffect(() => {
    if (columns.length > 0) {
      columns.map((row) => {
        if (row.filter) {
          Object.assign(row, { ...getColumnSearchProps(row.dataIndex) });
        }
        if (row.sorter) {
          row.sorter = (a, b) => (a[row.dataIndex] > b[row.dataIndex] ? 1 : -1);
        }
        return row;
      });
      setAllColumns(columns);
    }
  }, [columns]);

  return (
    <Table
      bordered
      columns={allColumns}
      dataSource={data}
      scroll={{ x: "100%" }}
      loading={loading}
      {...rest}
    />
  );
};

export default CustomTable;
