import React, { useState } from 'react';
import UnemploymentBarChart from './components/UnemploymentBarChart';
import UnemploymentLineGraph from './components/UnemploymentLineGraph';
import EmploymentPieChart from './components/UnemploymentPieChart';
import UnemploymentByAge from './components/UnemploymentByAge';
import CompletionLineGraph from './components/CompletionLineGraph';
import CombinedLineGraph from './components/CombinedLineGraph';

const completionData = [
    { month: "Jan", total_completion: 1027},
    { month: "Feb", total_completion: 1654 },
    { month: "Mar", total_completion: 2650 },
    { month: "Apr", total_completion: 3343 },
    { month: "May", total_completion: 3025 },
    { month: "Jun", total_completion: 2875 },
    { month: "Jul", total_completion: 3127 },
    { month: "Aug", total_completion: 2784 },
    { month: "Sep", total_completion: 2246 },
    { month: "Oct", total_completion: 2456 },
    { month: "Nov", total_completion: 1735 },
    { month: "Dec", total_completion: 1156 }
];

const months = completionData.map(d => d.month);

const App: React.FC = () => {
    const [selectedChart, setSelectedChart] = useState<'bar' | 'line' | 'pie' | 'bar2' | 'line2' | 'comp'>('bar');
    const [startMonth, setStartMonth] = useState<string>('Jan');
    const [endMonth, setEndMonth] = useState<string>('Dec');

    const filteredData = completionData.slice(
        months.indexOf(startMonth),
        months.indexOf(endMonth) + 1
    );

    return (
        <div className="App">
            <h1>Metropolitan Employment Data</h1>
            <nav className="bg-gray-800 p-4 text-white flex justify-around">
                <button onClick={() => setSelectedChart('bar')} className={`px-4 py-2 ${selectedChart === 'bar' ? 'bg-blue-500' : 'bg-gray-700'}`}>
                    Unemployment by Region
                </button>
                <button onClick={() => setSelectedChart('line')} className={`px-4 py-2 ${selectedChart === 'line' ? 'bg-blue-500' : 'bg-gray-700'}`}>
                    Unemployment Over Time
                </button>
                <button onClick={() => setSelectedChart('pie')} className={`px-4 py-2 ${selectedChart === 'pie' ? 'bg-blue-500' : 'bg-gray-700'}`}>
                    Employment by Job Sector
                </button>
                <button onClick={() => setSelectedChart('bar2')} className={`px-4 py-2 ${selectedChart === 'bar2' ? 'bg-blue-500' : 'bg-gray-700'}`}>
                    Unemployment by Age Range
                </button>
                <button onClick={() => setSelectedChart('line2')} className={`px-4 py-2 ${selectedChart === 'line2' ? 'bg-blue-500' : 'bg-gray-700'}`}>
                    Completions Over Time
                </button>
                <button onClick={() => setSelectedChart('comp')} className={`px-4 py-2 ${selectedChart === 'comp' ? 'bg-blue-500' : 'bg-gray-700'}`}>
                    Completions vs Unemployment
                </button>
            </nav>

            <div className="p-4">
                {selectedChart === 'bar' && (
                    <>
                        <h2>Unemployment by Region</h2>
                        <UnemploymentBarChart />
                    </>
                )}
                {selectedChart === 'line' && (
                    <>
                        <h2>Unemployment Over Time</h2>
                        <UnemploymentLineGraph />
                    </>
                )}
                {selectedChart === 'pie' && (
                    <>
                        <h2>Employment by Job Sector</h2>
                        <EmploymentPieChart />
                    </>
                )}
                {selectedChart === 'bar2' && (
                    <>
                        <h2>Unemployment by Age Range</h2>
                        <UnemploymentByAge />
                    </>
                )}
                {selectedChart === 'line2' && (
                    <>
                        <h2>Completions Over Time</h2>
                        <div className="flex gap-4 mb-4">
                            <label>
                                Start Month: <select value={startMonth} onChange={(e) => setStartMonth(e.target.value)}>
                                    {months.map(month => <option key={month} value={month}>{month}</option>)}
                                </select>
                            </label>
                            <label>
                                End Month: <select value={endMonth} onChange={(e) => setEndMonth(e.target.value)}>
                                    {months.map(month => <option key={month} value={month}>{month}</option>)}
                                </select>
                            </label>
                        </div>
                        <CompletionLineGraph filteredData={filteredData} />
                    </>
                )}
                {selectedChart === 'comp' && (
                    <>
                        <h2>Completions vs Unemployment</h2>
                        <CombinedLineGraph />
                    </>
                )}
            </div>
        </div>
    );
};

export default App;