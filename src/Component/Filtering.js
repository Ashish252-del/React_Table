import React, { useMemo, useState } from "react";
import { useTable, useGlobalFilter, useFilters } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS, GROUPED_COLUMNS } from "./coloumns";
import GlobleFilter from "./GlobleFilter";
import "./table.css";
import ColumnFilter from "./ColumnFilter";
export default function Filter() {
  // useing useMEmo hook its insured that deta is recreated at ebery render
  const columns = useMemo(() => GROUPED_COLUMNS, []);
    const data = useMemo(() => MOCK_DATA, []);
    const defaultColumn = useMemo(() => {
        return {
           Filter:ColumnFilter
       }
   } , [])
  const tableInstance = useTable(
    {
      columns,
          data,
      defaultColumn,
      },
      useFilters,
    useGlobalFilter
  );
   
  // these are function or hooks given by react-table for easy instance creation
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = tableInstance;
    const { globalFilter } = state;
    // console.log(state);
    // console.log(setGlobalFilter);
    return (
        <>
            
        <GlobleFilter filter={globalFilter} setFilter={setGlobalFilter} />
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                        {column.render("Header")}
                        <div>{column.canFilter ? column.render("Filter"): null}</div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            {footerGroups.map((footerGroup) => (
              <tr {...footerGroup.getFooterGroupProps()}>
                {footerGroup.headers.map((columns) => (
                  <td {...columns.getFooterProps}>
                    {columns.render("Footer")}
                  </td>
                ))}
              </tr>
            ))}
          </tfoot>
        </table>
      </>
    );
}
