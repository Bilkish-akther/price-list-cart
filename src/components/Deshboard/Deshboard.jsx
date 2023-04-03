import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Deshboard = () => {

    const studentMarks = [
        { id: 1, name: 'Alice', math: 90, physics: 85, chemistry: 95 },
        { id: 2, name: 'Bob', math: 80, physics: 75, chemistry: 85 },
        { id: 3, name: 'Charlie', math: 70, physics: 65, chemistry: 75 },
        { id: 4, name: 'David', math: 60, physics: 55, chemistry: 65 },
        { id: 5, name: 'Emily', math: 50, physics: 45, chemistry: 55 },
        { id: 6, name: 'Frank', math: 40, physics: 35, chemistry: 45 },
        { id: 7, name: 'Grace', math: 30, physics: 25, chemistry: 35 },
        { id: 8, name: 'Harry', math: 20, physics: 15, chemistry: 25 },
        { id: 9, name: 'Ivy', math: 10, physics: 5, chemistry: 15 },
        { id: 10, name: 'John', math: 100, physics: 95, chemistry: 100 },
        { id: 11, name: 'Kate', math: 80, physics: 90, chemistry: 85 },
        { id: 12, name: 'Liam', math: 70, physics: 85, chemistry: 75 }
      ];
      
    return (
        <div>

         <LineChart 
           width={1000}
           height={300}
           data={studentMarks}>
          
            <Line dataKey="math"></Line>
            <Line dataKey="physics"></Line>
            <Line stroke="#8884d9" dataKey="chemistry"></Line>
            <XAxis dataKey="name" />
            <YAxis></YAxis>
            <Tooltip/>
         </LineChart>

        </div>
    );
};

export default Deshboard;