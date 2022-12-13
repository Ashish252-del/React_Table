
import React, { useMemo, useState } from "react";
import {
  useTable,
  useGlobalFilter,
  useFilters,
  usePagination,
  useSortBy,
} from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS, GROUPED_COLUMNS } from "./coloumns";
import GlobleFilter from "./GlobleFilter";
import "./table.css";
import ColumnFilter from "./ColumnFilter";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Button from "@mui/material/Button";
export default function PaginationTable() {
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
    useGlobalFilter,
    useSortBy,
    usePagination
  );
   
  // these are function or hooks given by react-table for easy instance creation
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
      page,
      nextPage,
      previousPage,
      canPreviousPage,
      canNextPage,
      pageOptions,
    prepareRow,
    state,
      setGlobalFilter,
    
  } = tableInstance;
    const { globalFilter } = state;
    // console.log(state);
    // console.log(setGlobalFilter);
    const { pageIndex } = state;
    return (
      <>
            <GlobleFilter filter={globalFilter} setFilter={setGlobalFilter} />
            <br/>
          
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    <div>
                      {column.canFilter ? column.render("Filter") : null}
                    </div>
                    {column.render("Header")}
                    <br />
                    <span>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <ArrowUpwardIcon />
                        ) : (
                          <ArrowDownwardIcon />
                        )
                      ) : (
                        ""
                      )}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
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
        </table>
        <div>
          <span>
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>
                </span>
                <br/>
          <Button
            variant="outlined"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            Previous
          </Button>
          &nbsp;&nbsp;
          <Button
            variant="contained"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            Next
          </Button>
        </div>
      </>
    );
}
