"use client"
import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Line, LabelList, Label } from 'recharts';

const data = [
  {
    date: '2000-01',
    graduating: 4000,
    sandbox: 2400,
    incubated: 2400,

    amt: 2400,
  },
  {
    date: '2000-02',
    graduating: 3000,
    sandbox: 1398,
    incubated: 1398,
    amt: 2210,
  },
  {
    date: '2000-03',
    graduating: 2000,
    sandbox: 9800,
    incubated: 9800,
    amt: 2290,
  },
  {
    date: '2000-04',
    graduating: 2780,
    sandbox: 3908,
    incubated: 3908,
    amt: 2000,
  },
  {
    date: '2000-05',
    graduating: 1890,
    sandbox: 4800,
    incubated: 4800,
    amt: 2181,
  },
  {
    date: '2000-06',
    graduating: 2390,
    sandbox: 3800,
    incubated: 3800,
    amt: 2500,
  },
  {
    date: '2000-07',
    graduating: 3490,
    sandbox: 4300,
    incubated: 4300,
    amt: 2100,
  },
  {
    date: '2000-08',
    graduating: 4000,
    sandbox: 2400,
    incubated: 2400,
    amt: 2400,
  },
  {
    date: '2000-09',
    graduating: 3000,
    sandbox: 1398,
    incubated: 1398,
    amt: 2210,
  },
  {
    date: '2000-10',
    graduating: 2000,
    sandbox: 2000,
    incubated: 9800,
    amt: 2290,
  },
  {
    date: '2000-11',
    graduating: 2780,
    sandbox: 3908,
    incubated: 3908,
    amt: 2000,
  },
  {
    date: '2000-12',
    graduating: 1890,
    sandbox: 4800,
    incubated: 4800,
    amt: 2181,
  },
];

const monthNames = ["Jan", "Feb", "Mar", "Apr",
  "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const monthTickFormatter = (tick: string | number | Date) => {
  const date = new Date(tick);

  return monthNames[date.getMonth()]
};

const renderQuarterTick = (tickProps: { x: any; y: any; payload: any; }) => {
  const { x, y, payload } = tickProps;
  const { value, offset } = payload;
  const date = new Date(value);
  const month = date.getMonth();
  const quarterNo = Math.floor(month / 3) + 1;
  const isMidMonth = month % 3 === 1;

  if (month % 3 === 1) {
    return <text x={x} y={y - 4} textAnchor="middle">{`Q${quarterNo}`}</text>;
  }

  const isLast = month === 11;

  if (month % 3 === 0 || isLast) {
    const pathX = Math.floor(isLast ? x + offset : x - offset) + 0.5;

    return <path d={`M${pathX},${y - 4}v${-35}`} stroke="red" />;
  }
  return null;
};

const ProjectCharts = () => {
  return (
    <ResponsiveContainer width="100%" height="100%" className={``}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <Tooltip />
        <Legend verticalAlign="top" align={"right"} height={48} />
        <Line name="Sandbox" type="monotone" dataKey="Sandbox" stroke="#fff" />
        <Line name="graduating" type="monotone" dataKey="graduating" stroke="#FFFFFF" />
        <Line name="incubated" type="monotone" dataKey="incubated" stroke="#588FFF" />

        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" tickFormatter={monthTickFormatter} tick={{ fill: 'white' }} />
        <XAxis
          dataKey="date"
          axisLine={false}
          tickLine={false}
          interval={0}
          height={1}
          scale="band"
          xAxisId="quarter"

        />
        <YAxis tick={{ fill: 'white' }} />
        <Bar dataKey="sandbox" fill="#232323" width={6} 
        style={{border: "2px solid red"}} strokeWidth={12} />
        <Bar dataKey="graduating" fill="#FFFFFF" width={6} />
        <Bar dataKey="incubated" fill="#588FFF" width={6} />

        <Label position="top" color='#fff' />
      </BarChart>
    </ResponsiveContainer>
  );
}


export default ProjectCharts