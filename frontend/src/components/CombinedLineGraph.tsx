import React from "react";
import { ComposedChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line } from "recharts";
import regression from "regression";

const CombinedScatterPlot: React.FC = () => {
    const data = [
        { unemploymentRate: 8.7, total_completion: 1027 },
        { unemploymentRate: 7.8, total_completion: 1654 },
        { unemploymentRate: 7.4, total_completion: 2650 },
        { unemploymentRate: 6.9, total_completion: 3343 },
        { unemploymentRate: 6.4, total_completion: 3025 },
        { unemploymentRate: 7.1, total_completion: 2875 },
        { unemploymentRate: 6.7, total_completion: 3127 },
        { unemploymentRate: 7.3, total_completion: 2784 },
        { unemploymentRate: 8.1, total_completion: 2246 },
        { unemploymentRate: 7.9, total_completion: 2456 },
        { unemploymentRate: 8.5, total_completion: 1735 },
        { unemploymentRate: 9.1, total_completion: 1156 }
    ];

    
    const regressionData = data.map(d => [d.unemploymentRate, d.total_completion]);

    
    const result = regression.linear(regressionData);
    const [slope, intercept] = result.equation;

    console.log("Regression Equation: y =", slope, "* x +", intercept);

    const minX = Math.min(...data.map(d => d.unemploymentRate));
    const maxX = Math.max(...data.map(d => d.unemploymentRate));

    const regressionLine = [];
    for (let x = minX; x <= maxX; x += (maxX - minX) / 100) {
        regressionLine.push({
            unemploymentRate: x,
            total_completion: slope * x + intercept
        });
    }

    console.log("Regression Line Data:", regressionLine);

    return (
        <ResponsiveContainer width="100%" height={500}>
            {/* Use ComposedChart to overlay Scatter and Line */}
            <ComposedChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                    dataKey="unemploymentRate" 
                    type="number"
                    label={{ value: "Unemployment Rate (%)", position: "insideBottom", offset: -5, style: { textAnchor: "middle", fontSize: "14px", fill: "#666" } }} 
                />
                <YAxis 
                    dataKey="total_completion" 
                    type="number"
                    label={{ value: "Total Completions", angle: -90, position: "insideLeft", style: { textAnchor: "middle", fontSize: "14px", fill: "#666" } }} 
                />
                <Tooltip cursor={{ strokeDasharray: "3 3" }} />

                {/* Scatter plot for actual data */}
                <Scatter name="Actual Data" data={data} fill="#8884d8" />

                {/* Regression Line - Must share the same X-Axis */}
                <Line 
                    type="linear" 
                    data={regressionLine} 
                    dataKey="total_completion" 
                    stroke="red" 
                    dot={false} 
                    name="Line of Best Fit" 
                />
            </ComposedChart>
        </ResponsiveContainer>
    );
};

export default CombinedScatterPlot;