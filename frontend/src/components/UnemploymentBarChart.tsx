import React from "react";
import UnemploymentChart from "./UnemploymentChart";

const UnemploymentBarChart: React.FC = () => {
    const data = [
        { city: "Toronto", unemploymentRate: 8.1 },
        { city: "Hamilton", unemploymentRate: 7.0 }
    ];

    return <UnemploymentChart data={data} xDataKey="city" xLabel="City" />;
};

export default UnemploymentBarChart;
