import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Statistics = () => {
    const statis = useLoaderData();
    const statisData=statis.data;
    //const [name,total]=statisData;
    console.log(statisData);
    return (
        <div className='mt-10'>
            <LineChart width={400} height={250} data={statisData}
  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Line type="monotone" dataKey="name" stroke="#8884d8" />
  <Line type="monotone" dataKey="total" stroke="#82ca9d" />
</LineChart>
        </div>
    );
};

export default Statistics;