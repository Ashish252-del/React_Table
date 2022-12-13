import ColumnFilter from "./ColumnFilter";

export const COLUMNS = [
  {
    Header: "First Name",
    Footer: "first_name",
    accessor: "first_name",
   
  },
  {
    Header: "Last Name",
    Footer: "last_name",
    accessor: "last_name",
   
  },
  {
    Header: "Address",
    Footer: "address",
    accessor: "address",
   
  },
  {
    Header: "State",
    Footer: "State",
    accessor: "State",
   
  },
  {
    Header: "Phone No",
    Footer: "Phone",
    accessor: "Phone",
   disableFilters:true
  },
];

export const GROUPED_COLUMNS = [
  {
    Header: "Name",
    Footer: "Name",
    columns: [
      {
        Header: "First Name",
        Footer: "first_name",
        accessor: "first_name",
      },
      {
        Header: "Last Name",
        Footer: "last_name",
        accessor: "last_name",
      },
    ],
  },
  {
    Header: "Info",
    Footer: "Info",
    columns: [
      {
        Header: "Address",
        Footer: "address",
        accessor: "address",
      },
      {
        Header: "State",
        Footer: "State",
        accessor: "State",
      },
      {
        Header: "Phone No",
        Footer: "Phone",
        accessor: "Phone",
      },
    ],
  },
];