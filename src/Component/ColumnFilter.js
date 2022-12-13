import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
export default function ColumnFilter({ column }) {
    const { filterValue, setFilter } = column
    
    return (
      <>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
                autoComplete="off"
                
        ></Box>
        <span>
         
          <TextField
            id="standard-basic"
            label="Search"
                    variant="standard"
                style={{color:"white"}}    
            values={filterValue || " "}
            onChange={(e) => setFilter(e.target.value)}
                />
                <br/>
                <br/>
                <br/>
        </span>
      </>
    );
}
