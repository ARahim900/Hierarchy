import React, { useState, useMemo } from 'react';
import { waterData } from '../data/waterData';

const getLossBarColor = (lossPercent: number): string => {
    if (lossPercent < 10) return 'bg-green-500';
    if (lossPercent < 30) return 'bg-yellow-500';
    if (lossPercent < 45) return 'bg-orange-500';
    return 'bg-red-500';
};

const getLossTextColor = (lossPercent: number): string => {
    if (lossPercent < 10) return 'text-green-600';
    if (lossPercent < 30) return 'text-yellow-600';
    if (lossPercent < 45) return 'text-orange-500';
    return 'text-red-600';
};

const DataVisualization: React.FC = () => {
    const [timePeriod, setTimePeriod] = useState('Last 30 Days');

    const zones = useMemo(() => {
        return waterData.children?.find(c => c.id === 'zone-bulks')?.children || [];
    }, []);

    const sortedZones = useMemo(() => {
        // Sort by loss percentage descending to highlight worst offenders
        return [...zones].sort((a, b) => b.lossPercent - a.lossPercent);
    }, [zones]);
    
    const timeFilters = ['Last 7 Days', 'Last 30 Days', 'Last 6 Months'];

    return (
        <div className="p-6 border-b border-brand-divider">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-5">
                <h2 className="text-xl font-semibold text-slate-800">Consumption &amp; Loss Analysis</h2>
                <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg self-start">
                    {timeFilters.map(period => (
                        <button
                            key={period}
                            onClick={() => setTimePeriod(period)}
                            className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors duration-200 ${
                                timePeriod === period 
                                ? 'bg-white text-brand-accent-dark shadow-sm' 
                                : 'text-slate-500 hover:bg-slate-200'
                            }`}
                            aria-pressed={timePeriod === period}
                        >
                            {period}
                        </button>
                    ))}
                </div>
            </div>
            <div className="space-y-4">
                {sortedZones.map(zone => {
                    const billedVolume = zone.volume > zone.loss ? zone.volume - zone.loss : 0;
                    const billedPercent = zone.volume > 0 ? (billedVolume / zone.volume) * 100 : 100;
                    const lossPercent = zone.volume > 0 ? (zone.loss / zone.volume) * 100 : 0;

                    return (
                        <div key={zone.id} className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-x-6 gap-y-2 items-center">
                            <div className="text-sm font-medium text-slate-700 truncate" title={zone.name}>
                                {zone.name}
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-full bg-slate-200 rounded-full h-4 flex overflow-hidden" title={`Total: ${zone.volume.toLocaleString()} m³`}>
                                    <div
                                        className="bg-sky-400 h-4 transition-all duration-500"
                                        style={{ width: `${billedPercent}%` }}
                                        title={`Billed Consumption: ${billedVolume.toLocaleString()} m³`}
                                    ></div>
                                    <div
                                        className={`${getLossBarColor(zone.lossPercent)} h-4 transition-all duration-500`}
                                        style={{ width: `${lossPercent}%` }}
                                        title={`Loss: ${zone.loss.toLocaleString()} m³ (${zone.lossPercent.toFixed(1)}%)`}
                                    ></div>
                                </div>
                                <div className="flex items-baseline gap-2 font-mono w-48 justify-end flex-shrink-0">
                                    <span className="text-slate-600 text-sm">{zone.volume.toLocaleString()} <span className="text-xs text-brand-muted">m³</span></span>
                                    <span className={`text-xs w-[100px] text-right ${getLossTextColor(zone.lossPercent)}`}>({zone.loss.toLocaleString()}&nbsp;m³&nbsp;loss)</span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default DataVisualization;
