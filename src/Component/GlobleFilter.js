import React,{useState} from 'react'
import { useAsyncDebounce } from 'react-table'
import TextField from "@mui/material/TextField";
export default function GlobleFilter({ filter, setFilter }) {
    const [value, setValue] = useState(filter)
    const onChange = useAsyncDebounce(value => {
        setFilter(value || undefined)
    }, 1000)
  return (
    <span style={{fontSize:"25px"}}>
      Search:{" "}
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        values={filter || " "}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
      />
    </span>
  );
}
