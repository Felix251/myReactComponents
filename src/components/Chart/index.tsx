import React, { useState } from 'react';
import  styled  from 'styled-components'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";
  
  const dailyData = [
    { name: 'Monday', value: 95 },
    { name: 'Tuesday', value: 30 },
    { name: 'Wednesday', value: 70 },
    { name: 'Thursday', value: 20 },
    { name: 'Friday', value: 40 },
    { name: 'Saturday', value: 70 },
    { name: 'Sunday', value: 30 },
  ];    
  const monthlyData = [
        { name: 'January', value: 50 },
        { name: 'February', value: 75 },
        { name: 'March', value: 30 },
        { name: 'April', value: 85 },
        { name: 'May', value: 40 },
        { name: 'June', value: 95 },
        { name: 'July', value: 60 },
        { name: 'August', value: 70 },
        { name: 'September', value: 55 },
        { name: 'October', value: 90 },
        { name: 'November', value: 35 },
        { name: 'December', value: 80 },
    ];
      
  const yearlyData = [
    { name: '2019', value: 50 },
    { name: '2020', value: 75 },
    { name: '2021', value: 30 },
    { name: '2022', value: 85 },
    { name: '2023', value: 40 },
    { name: '2024', value: 95 },
    { name: '2025', value: 60 },
  ];
  

export const Chart = () => {
    const [activeChart, setActiveChart] = useState("Jours");
    const data = activeChart == 'Jours' ? dailyData 
    : activeChart == 'Mois' ? monthlyData
    : yearlyData;
  return (
    <Wrapper>
        <Navigation>
            <Title toggled={activeChart === 'Jours'} onClick={() => setActiveChart('Jours')}>Jours</Title>
            <Title toggled={activeChart === 'Mois'} onClick={() => setActiveChart('Mois')}>Mois</Title>
            <Title toggled={activeChart === 'Années'} onClick={() => setActiveChart('Années')}>Années</Title>
        </Navigation>
        <LineChart width={600} height={360} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="value" stroke="#E6A81E" strokeWidth={2}/>
            <CartesianGrid stroke="#AEAEAE" strokeDasharray="" />
            <XAxis  axisLine={false} dataKey="name" tick={{ fontSize: 12, fill: '#AEAEAE' }}/>
            <YAxis  axisLine={false} type="number" domain={[0, 100]} tickCount={11} tick={{ fontSize: 12, fill: '#AEAEAE' }} />
            <Tooltip />
            {/* <Legend /> */}
      </LineChart>  
    </Wrapper>
  )
}
const Wrapper = styled.div`
    width: 40%;
    height: 65%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
`;
const Navigation = styled.div`
    display: flex;
    margin: 20px;
`;
  const Title = styled.span<{toggled?: boolean;}>`
  border-bottom: 4px solid ${props => (props.toggled ? ' #E6A81E' : '#7F7F7F')};
  color: ${props => (props.toggled ? 'black' : '#7F7F7F')};
  padding: 6px 8px;
  font-weight: 500;
  cursor: pointer;
`;