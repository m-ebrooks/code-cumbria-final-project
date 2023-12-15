import React from "react";
import SliderComponent from "./SliderComponent";


const SliderSelect = ({data, setData}) => {
  // console.log(data)

  const bank_limit = 500000;

  return (
    <>
      <SliderComponent
        label="Home Value"
        min={80000}
        max={bank_limit}
        defaultValue={data.homeValue}
        value={data.homeValue}
        step={500}
        onChange={(e, value) => setData({
            ...data,
            deposit: value * 0.1,
            loanAmount: value * 0.9,
            homeValue: value
          })
        }
        unit="£"
        amount={data.homeValue}
        
      />
      
      
      <SliderComponent
        label="Deposit"
        min={0}
        max={data.homeValue}
        defaultValue={data.deposit}
        value={data.deposit}
        step={100}
        onChange={(e, value) => setData({
          // spread operator stops old data being deleted
          ...data,
          loanAmount: (data.homeValue - value),
          deposit: value
        })}
        unit="£"
        amount={data.deposit}
      />
      <SliderComponent
        label="Loan Amount"
        min={0}
        max={data.homeValue}
        defaultValue={data.loanAmount}
        value={data.loanAmount}
        step={100}
        onChange={(e, value) => setData({
          ...data,
          deposit: (data.homeValue -value),
          loanAmount: value
        })}
        unit="£"
        amount={data.loanAmount}
      />
      <SliderComponent
        label="Interest Rate"
        min={0}
        max={10}
        defaultValue={data.interestRate}
        value={data.interestRate}
        step={0.1}
        onChange={(e, value) => setData({
          ...data,
          interestRate: value
        })}
        amount={data.interestRate}
        unit="%"
      />
    </>
  );
};

export default SliderSelect;
