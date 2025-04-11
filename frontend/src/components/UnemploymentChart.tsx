import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface UnemploymentChartProps<T = unknown> {
    data: T[];
    xDataKey: string;
    xLabel: string;
}

const UnemploymentChart: React.FC<UnemploymentChartProps> = ({ data, xDataKey, xLabel }) => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                    dataKey={xDataKey}
                    label={{
                        value: xLabel,
                        position: "insideBottom",
                        offset: -5,
                        style: { textAnchor: "middle", fontSize: "14px", fill: "#666" }
                    }}
                />
                <YAxis 
                    label={{ 
                        value: "Unemployment Rate (%)", 
                        angle: -90, 
                        position: "insideLeft", 
                        style: { textAnchor: "middle", fontSize: "14px", fill: "#666" }
                     }} 
                />
                <Tooltip />
                <Legend />
                <Bar dataKey="unemploymentRate" fill="#8884d8" name="Unemployment Rate" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default UnemploymentChart;
