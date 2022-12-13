import React, { useState } from 'react'
import MaterialTable from 'material-table'

export default function Reacttable() {
    const [tableData,setTableData] = useState([])
    const columns = [
        {
        title:"Name" , field:"name"
        },
        {
        title:"Email" , field:"email"
        },
        {
        title:"Phone Number" , field:"phone"
        },
        {
        title:"Gender" , field:"gender"
        },
        {
        title:"City" , field:"city"
        },
    ]
  return (
      <div><h1>Ashish</h1>
      <MaterialTable columns={columns} data ={tableData} />
      </div>
  )
}
