import React from "react";
import Slider from "@mui/material/Slider";
import { Stack, Typography } from "@mui/material";


// destructured props {}


const SliderComponent = ({
  defaultValue,
  min,
  max,
  step,
  onChange,
  value,
  label,
  unit,
  amount,
}) => {




  return (
    // fake dom, empty opening and closing tag, alternative is to use fragment
  
    <Stack my={5}>
      <Stack gap={1}>
        <Typography variant="subtitle2">{label}</Typography>
        <Typography variant="h5">
          {unit} {amount}{" "}
        </Typography>
      </Stack>
      <Slider
        defaultValue={defaultValue}
        // getAriaValueText={valuetext}
        min={min}
        max={max}
        step={step}
        marks
        onChange={onChange}
        value={value}
        color="secondary"
        
      />

      <Stack direction="row" justifyContent="space-between">
        <Typography variant="caption" color="text.secondary">
          {unit} {min}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {unit} {max}
        </Typography>
      </Stack>
    </Stack>
    
  );
};


export default SliderComponent;
