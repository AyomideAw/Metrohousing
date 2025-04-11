import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface CompletionLineGraphProps {
    filteredData: { month: string; total_completion: number }[];
}

const CompletionLineGraph: React.FC<CompletionLineGraphProps> = ({ filteredData }) => {
    return (
        <ResponsiveContainer width="100%" height={500}>
            <LineChart data={filteredData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                    dataKey="month" 
                    label={{ value: "Month", position: "insideBottom", offset: -5, style: { textAnchor: "middle", fontSize: "14px", fill: "#666" } }}
                />
                <YAxis 
                    label={{ value: "Total Completions", angle: -90, position: "insideLeft", style: { textAnchor: "middle", fontSize: "14px", fill: "#666" } }} 
                />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="total_completion" stroke="#8884d8" name="Completions" dot={{ r: 4 }} />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default CompletionLineGraph;