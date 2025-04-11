import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const UnemploymentLineGraph: React.FC = () => {
    //const {data, loading, error } = getUnemploymentData();

    //if (loading) return <p>Loading...</p>;
    //if (error) return <p>{error}</p>

    const data = [
        { month: "Jan", unemploymentRate: 7.5 },
        { month: "Feb", unemploymentRate: 7.3 },
        { month: "Mar", unemploymentRate: 7.1 },
        { month: "Apr", unemploymentRate: 6.9 },
        { month: "May", unemploymentRate: 7.2 },
        { month: "Jun", unemploymentRate: 7.8 },
        { month: "Jul", unemploymentRate: 8.1 },
        { month: "Aug", unemploymentRate: 8.4 },
        { month: "Sep", unemploymentRate: 8.0 },
        { month: "Oct", unemploymentRate: 7.6 },
        { month: "Nov", unemploymentRate: 7.4 },
        { month: "Dec", unemploymentRate: 7.2 }
    ];

    return (
        <ResponsiveContainer width="100%" height={500}>
            <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month"
                    label={{
                        value: "Month",
                        position: "insideBottom",
                        offset: -5,
                        style: {textAnchor: "middle", fontSize: "14px", fill: "#666" }
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
                <Line type = "monotone" dataKey="unemploymentRate" stroke="#8884d8" name="Unemployment Rate" dot={{ r: 4 }} />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default UnemploymentLineGraph;
