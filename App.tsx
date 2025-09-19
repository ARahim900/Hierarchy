import React, { useState, useMemo } from 'react';
import { waterData } from './data/waterData';
import type { WaterNode } from './types';
import SummaryCard from './components/SummaryCard';
import HierarchyView from './components/HierarchyView';
import DataVisualization from './components/DataVisualization';
import { WaterDropIcon } from './components/icons/WaterDropIcon';

const App: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const summaryStats = useMemo(() => {
        const mainBulk = waterData;
        const directConnections = mainBulk.children?.find(c => c.id === 'dc-group') || { volume: 0 };
        const zoneBulks = mainBulk.children?.find(c => c.id === 'zone-bulks') || { volume: 0 };

        const directConnectionPercentage = mainBulk.volume > 0 ? (directConnections.volume / mainBulk.volume) * 100 : 0;
        const zoneBulksPercentage = mainBulk.volume > 0 ? (zoneBulks.volume / mainBulk.volume) * 100 : 0;

        return {
            mainBulk: {
                volume: mainBulk.volume,
                subtitle: 'Total System Input'
            },
            directConnections: {
                volume: directConnections.volume,
                subtitle: `${directConnectionPercentage.toFixed(1)}% of Total`
            },
            zoneBulks: {
                volume: zoneBulks.volume,
                subtitle: `${zoneBulksPercentage.toFixed(1)}% of Total`
            },
            mainLoss: {
                volume: mainBulk.loss,
                subtitle: `${mainBulk.lossPercent.toFixed(1)}% Loss Rate`,
                lossPercent: mainBulk.lossPercent
            }
        };
    }, []);
    
    const getLossClassForValue = (lossPercent: number | undefined) => {
        if (lossPercent === undefined) return 'text-slate-800';
        if (lossPercent < 10) return 'text-green-600';
        if (lossPercent < 30) return 'text-yellow-600';
        if (lossPercent < 45) return 'text-orange-500';
        return 'text-red-600';
    };


    return (
        <div className="bg-brand-bg min-h-screen text-slate-700 font-sans p-4 sm:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto">
                <header className="text-center mb-8">
                    <div className="flex items-center justify-center gap-4 mb-2">
                        <WaterDropIcon className="w-10 h-10 text-brand-accent"/>
                        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Muscat Bay Water System</h1>
                    </div>
                    <p className="text-brand-subtle text-lg">August 2025 - Complete Meter Hierarchy</p>
                </header>

                <main className="bg-brand-surface rounded-2xl shadow-lg overflow-hidden">
                    <div className="p-6 border-b border-brand-divider">
                        <h2 className="text-xl font-semibold text-slate-800 mb-4">System Overview</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                           <SummaryCard
                                title="Main Bulk (L1)"
                                value={summaryStats.mainBulk.volume}
                                subtitle={summaryStats.mainBulk.subtitle}
                            />
                            <SummaryCard
                                title="Direct Connections"
                                value={summaryStats.directConnections.volume}
                                subtitle={summaryStats.directConnections.subtitle}
                            />
                            <SummaryCard
                                title="Zone Bulks"
                                value={summaryStats.zoneBulks.volume}
                                subtitle={summaryStats.zoneBulks.subtitle}
                            />
                            <SummaryCard
                                title="Main Distribution Loss"
                                value={summaryStats.mainLoss.volume}
                                subtitle={summaryStats.mainLoss.subtitle}
                                valueClassName="text-red-600"
                                lossPercent={summaryStats.mainLoss.lossPercent}
                                barClassName="bg-red-500"
                            />
                        </div>
                    </div>

                    <DataVisualization />

                    <HierarchyView 
                        data={waterData} 
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                    />
                </main>

                <footer className="text-center mt-8 text-brand-subtle text-sm">
                    <p>Water System Dashboard | Modern UI Concept</p>
                </footer>
            </div>
        </div>
    );
};

export default App;