import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const MortgageTerm = ({data, setData}) => {

  const handleChange = (event) => {
    setData({
      ...data,
      loanTerm: event.target.value,
    })
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Mortgage Term</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={data.loanTerm}
        label="Mortgage Term"
        onChange={handleChange}
      >
        <MenuItem value={1}>1 year</MenuItem>
        <MenuItem value={2}>2 years</MenuItem>
        <MenuItem value={10}>10 years</MenuItem>
        <MenuItem value={15}>15 years</MenuItem>
        <MenuItem value={20}>20 years</MenuItem>
        <MenuItem value={25}>25 years</MenuItem>
        <MenuItem value={30}>30 years</MenuItem>
        <MenuItem value={35}>35 years</MenuItem>

      </Select>
    </FormControl>
  );
};

export default MortgageTerm
;
