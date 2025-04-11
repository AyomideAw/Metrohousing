import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
    { sector: "Agriculture", employmentRate: 7 },
    { sector: "Health care and social assistance", employmentRate: 9 },
    { sector: "Manufacturing - durable goods", employmentRate: 10 },
    { sector: "Retail trade", employmentRate: 6 },
    { sector: "Finance and insurance", employmentRate: 6 },
    { sector: "Construction", employmentRate: 9 },
    { sector: "Educational services", employmentRate: 10},
    { sector: "Accommodation and food services", employmentRate: 11},
    { sector: "Transportation and warehousing", employmentRate: 9},
    { sector: "Mining, quarrying, and oil and gas extraction", employmentRate: 8},
    { sector: "Other", employmentRate: 15}
];

// Define colors for each sector
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF", "#FF4567", "#82ca9d"];

const EmploymentPieChart: React.FC = () => {
    return (
        <ResponsiveContainer width="100%" height={600}>
            <PieChart>
                <Pie 
                    data={data} 
                    dataKey="employmentRate" 
                    nameKey="sector" 
                    cx="50%" 
                    cy="50%" 
                    outerRadius={100} 
                    fill="#8884d8" 
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                    {data.map((entry) => (
                        <Cell key={`cell-${entry.sector}`} fill={COLORS[data.indexOf(entry) % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </ResponsiveContainer>
    );
};

export default EmploymentPieChart;