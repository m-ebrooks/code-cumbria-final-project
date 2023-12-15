import { Stack, Typography } from "@mui/material";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Result = ({ data }) => {
  // destructure data
  const { homeValue, loanAmount, loanTerm, interestRate } = data;

  const totalLoanMonths = loanTerm * 12; // 60 months = 5 months

  const interestPerMonth = interestRate / 100 / 12; // 100 @ 12% fot 1 year

  const monthlyPayment =
    (loanAmount *
      interestPerMonth *
      (1 + interestPerMonth) ** totalLoanMonths) /
    ((1 + interestPerMonth) ** totalLoanMonths - 1);

  const totalInterest = monthlyPayment * totalLoanMonths - loanAmount;

  const pieChartData = {
    labels: ["Amount", "Interest"],
    datasets: [
      {
        label: "Ratio of Amount and Interest",
        data: [homeValue, totalInterest],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Stack gap={3}>
      <Typography textAlign="center" varient="h2">
        Montly Payment: £ {monthlyPayment.toFixed(2)}
      </Typography>
      <Stack direction="row" justifyContent="center">
        <div>
          <Pie data={pieChartData} />
        </div>
      </Stack>
    </Stack>
  );
};

export default Result;
