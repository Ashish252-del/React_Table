import React,{useState} from 'react'
import { useAsyncDebounce } from 'react-table'
export default function GlobleFilter({ filter, setFilter }) {
    const [value, setValue] = useState(filter)
    const onChange = useAsyncDebounce(value => {
        setFilter(value || undefined)
    }, 1000)
  return (
    <span>
      Search:{" "}
      <input
        values={filter || " "}
        onChange={(e) => {
            setValue(e.target.value);
            onChange(e.target.value)
        }}
      />
    </span>
  );
}
