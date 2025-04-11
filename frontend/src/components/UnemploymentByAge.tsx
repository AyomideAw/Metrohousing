import React from "react";
import UnemploymentChart from "./UnemploymentChart";

const UnemploymentByAge: React.FC = () => {
    const data = [
        { age: "15-19", unemploymentRate: 21.3 },
        { age: "20-24", unemploymentRate: 13.3 },
        { age: "25-29", unemploymentRate: 8.5 },
        { age: "30-34", unemploymentRate: 6.7 },
        { age: "35-39", unemploymentRate: 6.4 },
        { age: "40-44", unemploymentRate: 6.2 },
        { age: "45-49", unemploymentRate: 6.4 },
        { age: "50-54", unemploymentRate: 6.5 },
        { age: "55-59", unemploymentRate: 6.3 },
        { age: "60-64", unemploymentRate: 7.3 },
        { age: "65-69", unemploymentRate: 9.2 }
    ];

    return <UnemploymentChart data={data} xDataKey="age" xLabel="Age" />;
};

export default UnemploymentByAge;
