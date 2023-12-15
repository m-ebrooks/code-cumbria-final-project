import React, {useState} from 'react'
import { Container, Grid } from "@mui/material";
import Result from './Result';
import SliderSelect from './SliderSelect';
import MortgageTerm from './MortgageTerm';

function MortgageCalculator() {
  const [data, setData] = useState({
    homeValue: 100000,
    deposit: 3000 * 0.1,
    loanAmount: 3000 * 0.9,
    loanTerm: 5,
    interestRate: 5
  });




  return (
    <div className="MortgageCalculator">
      <Container maxWidth="xl" sx={{mt:4}}>
        <Grid container spacing={5} alignItems='center'>
          <Grid item xs={12} md={6}>
            <SliderSelect data={data} setData={setData}/>
            <MortgageTerm data={data} setData={setData}/>
          </Grid>
          <Grid item xs={12} md={6}>
            <Result data={data}/>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};


export default MortgageCalculator;
